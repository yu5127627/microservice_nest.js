import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import configSetting from '../../../apps/gateways/src/system/config/config.setting';
import { Manage } from './entity/manage.entity';
import { Menu } from './entity/menu.entity';
import { Role } from './entity/role.entity';
import { RoleMenu } from './entity/roleMenu.entity';
import { Setting } from './entity/setting.entity';
import { User } from './entity/user.entity';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        if (configSetting._db) {
          Object.assign(process.env, configSetting._db);
        }
        return {
          host: process.env.db_host,
          port: Number(process.env.db_port),
          username: process.env.db_username,
          password: process.env.db_password,
          database: process.env.db_database,
          type: 'mysql',
          entities: [User, Role, Manage, Menu, Setting, RoleMenu],
          synchronize: true,
          logger: 'file',
          logging: true,
          timezone: 'Z',
        };
      },
    }),
  ],
})
export class DbModule {}
