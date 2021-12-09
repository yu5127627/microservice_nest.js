import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { ManageModule } from './manage/manage.module';
import { DbModule } from '@app/libs/db/db.module';
import { MenuModule } from './menu/menu.module';

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
