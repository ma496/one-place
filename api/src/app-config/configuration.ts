export interface RootConfig {
  default: DefaultConfig
  database: DatabaseConfig
}

export interface DefaultConfig {
  port: number
}

export interface DatabaseConfig {
  host: string
  port: number
}

export default () => ({
  default: {
    port: parseInt(process.env.PORT, 10) || 3000
  },
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432
  }
} as RootConfig);


