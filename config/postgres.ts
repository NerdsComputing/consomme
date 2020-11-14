import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT || 5432,
  database: process.env.POSTGRES_DATABASE || 'consomme',
  user: process.env.POSTGRES_USER || 'consomme_user',
  password: process.env.POSTGRES_PASSWORD || 'consomme_password',
}));
