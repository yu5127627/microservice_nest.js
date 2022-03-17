import { Module } from '@nestjs/common';
import { AuthModule } from './system/auth/auth.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './system/role/role.module';
import { ManageModule } from './system/manage/manage.module';
import { DbModule } from '@app/libs/db/db.module';
import { MenuModule } from './system/menu/menu.module';
import { ConfigModule as SettingModel } from './system/config/config.module';
import { LibsModule } from '@app/libs';
import { ConfigModule } from '@nestjs/config';
import { LogModule } from './log/log.module';
import { TagModule } from './blog/tag/tag.module';
import { ContentModule } from './blog/content/content.module';
import { CategoryModule } from './blog/category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    LibsModule,
    AuthModule,
    UserModule,
    RoleModule,
    ManageModule,
    DbModule,
    MenuModule,
    SettingModel,
    LogModule,
    TagModule,
  ],
})
export class GatewaysModule {}
