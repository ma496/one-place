import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import "dotenv/config"

async function main() {
  console.log("migration started...")

  const migrationClient = postgres(process.env.DATABASE_URL, { max: 1 });
  await migrate(drizzle(migrationClient), { migrationsFolder: './src/drizzle/migrations' })
  await migrationClient.end()

  console.log("migration ended...")
}

main()
