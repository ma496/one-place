import * as pg from "postgres"
import { AppConfigService } from "src/app-config/app-config.service"
import { drizzle } from 'drizzle-orm/postgres-js'
import * as schema from './schema';

export const DrizzleAsyncProvider = "drizzleProvider"

export const drizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    inject: [AppConfigService],
    useFactory: (config: AppConfigService) => {
      const client = pg(config.databaseConfig().url)
      return drizzle(client, {schema})
    },
    exports: [DrizzleAsyncProvider]
  }
]
