import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './app-config/app-config.module';
import { DrizzleModule } from './drizzle/drizzle.module';
import { UserModule } from './user/user.modult';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AppConfigModule,
    DrizzleModule,
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
