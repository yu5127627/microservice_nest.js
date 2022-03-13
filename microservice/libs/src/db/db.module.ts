import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginLog } from './entity/loginLog.entity';
import { Manage } from './entity/manage.entity';
import { Menu } from './entity/menu.entity';
import { Role } from './entity/role.entity';
import { RoleMenu } from './entity/roleMenu.entity';
import { Setting } from './entity/setting.entity';
import { User } from './entity/user.entity';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABSE,
        type: 'mysql',
        entities: [User, Role, Manage, Menu, Setting, RoleMenu, LoginLog],
        synchronize: true,
        logger: 'file',
        logging: true,
        timezone: 'Z',
      }),
    }),
  ],
})
export class DbModule {}
