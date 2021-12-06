import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manage } from './entity/manage.entity';
import { Role } from './entity/role.entity';
import { User } from './entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'example',
        database: 'microservice',
        entities: [User, Role, Manage],
        synchronize: true,
        logger: 'debug',
        logging: true,
        timezone: 'Z',
      }),
    }),
  ],
})
export class DbModule {}
