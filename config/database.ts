import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.TYPEORM_HOST || 'localhost',
  port: process.env.TYPEORM_PORT || 5432,
  database: process.env.TYPEORM_DATABASE || 'consomme',
  username: process.env.TYPEORM_USERNAME || 'consomme_user',
  password: process.env.TYPEORM_PASSWORD || 'consomme_password',
  type: process.env.TYPEORM_CONNECTION,
  entities: [process.env.TYPEORM_ENTITIES],
  synchronize: false,
  logging: 'all',
  migrations: [process.env.TYPEORM_MIGRATIONS],
  cli: {
    migrationsDir: 'migration',
  },
}));
