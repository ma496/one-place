export interface RootConfig {
  default: DefaultConfig
  database: DatabaseConfig
}

export interface DefaultConfig {
  port: number
}

export interface DatabaseConfig {
  url: string
}

export default () => ({
  default: {
    port: parseInt(process.env.PORT, 10) || 3000
  },
  database: {
    url: process.env.DATABASE_URL,
  }
} as RootConfig);


