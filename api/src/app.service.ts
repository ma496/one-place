import { Injectable } from '@nestjs/common';
import { DrizzleService } from './drizzle/drizzle.service';

@Injectable()
export class AppService {
  constructor(private readonly drizzleService: DrizzleService) {

  }

  getHello() {
    return this.drizzleService.db.query.users.findMany();
  }
}
