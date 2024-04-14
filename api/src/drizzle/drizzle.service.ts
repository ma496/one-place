import { Inject, Injectable } from "@nestjs/common";
import { DrizzleAsyncProvider } from "./drizzle.provider";
import * as schema from "./schema";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

@Injectable()
export class DrizzleService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    public db: PostgresJsDatabase<typeof schema>) {}
}
