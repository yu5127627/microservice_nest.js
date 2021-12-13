import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import configSetting from '../../../apps/gateways/src/system/config/config.setting';
import { Manage } from './entity/manage.entity';
import { Menu } from './entity/menu.entity';
import { Role } from './entity/role.entity';
import { Setting } from './entity/setting.entity';
import { User } from './entity/user.entity';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...configSetting._db,
        type: 'mysql',
        entities: [User, Role, Manage, Menu, Setting],
        synchronize: true,
        logger: 'file',
        logging: true,
        timezone: 'Z',
      }),
    }),
  ],
})
export class DbModule {}
