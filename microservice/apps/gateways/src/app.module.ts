import { Module } from '@nestjs/common';
import { AuthModule } from './system/auth/auth.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './system/role/role.module';
import { ManageModule } from './system/manage/manage.module';
import { DbModule } from '@app/libs/db/db.module';
import { MenuModule } from './system/menu/menu.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    RoleModule,
    ManageModule,
    DbModule,
    MenuModule,
  ],
})
export class AppModule {}
