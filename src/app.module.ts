import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import database from '../config/postgres';
import app from '../config/app';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [database, app],
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
