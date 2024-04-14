import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DrizzleService } from './drizzle/drizzle.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly drizzleService: DrizzleService) {}

  @Get()
  getHello() {
    return this.drizzleService.db.query.users.findMany();
  }
}
