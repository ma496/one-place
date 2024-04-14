import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';
import { AppConfigService } from './app-config.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
  ],
  providers: [
    AppConfigService
  ],
  exports: [
    AppConfigService
  ]
})
export class AppConfigModule {}
