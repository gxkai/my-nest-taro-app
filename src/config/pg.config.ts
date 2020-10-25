import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const pgConfig = (): {
  pg: TypeOrmModuleOptions
} => ({
  pg: {
    host: process.env.PG_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    database: process.env.PG_DATABASE,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
  }
});
export default pgConfig;
