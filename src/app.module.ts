import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import pgConfig from './config/pg.config';
import { Task } from './tasks/entities/task.entity';
import { User } from './auth/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
      ignoreEnvFile: false,
      isGlobal: true,
      load: [pgConfig]
    }),
    TasksModule, TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('pg.host'),
        port: configService.get('pg.port'),
        username: configService.get('pg.username'),
        password: configService.get('pg.password'),
        database: configService.get('pg.database'),
        entities: [Task, User],
        synchronize: true,
      }),
      inject: [ConfigService],
    }), AuthModule],
})
export class AppModule { }
