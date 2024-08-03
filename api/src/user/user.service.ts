import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { hash } from 'bcrypt';
import { DrizzleService } from 'src/drizzle/drizzle.service';
import * as schema from 'src/drizzle/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class UserService {
  constructor(private drizzle: DrizzleService) { }

  async create(dto: CreateUserDto) {
    const user = await this.drizzle.db.query.users.findFirst({
      where: eq(schema.users.email, dto.email),
      columns: {
        id: true
      }
    })

    if (user) throw new ConflictException('email duplicated')

    const newUser = await this.drizzle.db.insert(schema.users).values({
      ...dto,
      password: await hash(dto.password, 10),
    }).returning();

    const { password, ...result } = newUser[0];
    return result;
  }

  async findByEmail(email: string) {
    return await this.drizzle.db.query.users.findFirst({
      where: eq(schema.users.email, email),
    });
  }

  async findById(id: number) {
    return await this.drizzle.db.query.users.findFirst({
      where: eq(schema.users.id, id),
    });
  }
}
