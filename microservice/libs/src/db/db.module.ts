import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginLog } from './entity/loginLog.entity';
import { Manage } from './entity/manage.entity';
import { Menu } from './entity/menu.entity';
import { Role } from './entity/role.entity';
import { RoleMenu } from './entity/roleMenu.entity';
import { Setting } from './entity/setting.entity';
import { User } from './entity/user.entity';
import { Category } from './cms/category.entity';
import { Tag } from './cms/tag.entity';
import { Content } from './cms/content.entity';

const blogDB = TypeOrmModule.forRootAsync({
  name: 'blog',
  useFactory: () => ({
    name: 'blog',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.BLOG_DB_USERNAME,
    password: process.env.BLOG_DB_PASSWORD,
    database: process.env.BLOG_DB_DATABSE,
    type: 'mysql',
    entities: [Category, Tag, Content],
    synchronize: true,
    logger: 'file',
    logging: true,
    timezone: 'Z',
  }),
});

const gatewayDB = TypeOrmModule.forRootAsync({
  useFactory: async () => {
    return {
      name: 'gateway',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.GATEWAY_DB_USERNAME,
      password: process.env.GATEWAY_DB_PASSWORD,
      database: process.env.GATEWAY_DB_DATABSE,
      type: 'mysql',
      entities: [Role, Manage, Menu, Setting, RoleMenu, LoginLog],
      synchronize: true,
      logger: 'file',
      logging: true,
      timezone: 'Z',
    };
  },
});
@Module({
  imports: [gatewayDB, blogDB],
})
export class DbModule {}
