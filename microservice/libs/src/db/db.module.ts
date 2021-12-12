import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manage } from './entity/manage.entity';
import { Menu } from './entity/menu.entity';
import { Role } from './entity/role.entity';
import { User } from './entity/user.entity';
import setting from '../../../apps/gateways/src/system/config/config.setting';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...setting._db,
        type: 'mysql',
        entities: [User, Role, Manage, Menu],
        synchronize: true,
        logger: 'file',
        logging: true,
        timezone: 'Z',
      }),
    }),
  ],
})
export class DbModule {}
