import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DatabaseConfig, DefaultConfig } from "./configuration";

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  defaultConfig(): DefaultConfig {
    return this.configService.get<DefaultConfig>('default')
  }

  databaseConfig(): DatabaseConfig {
    return this.configService.get<DatabaseConfig>('database')
  }
}
