import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { ManageModule } from './manage/manage.module';
import { RuleModule } from './rule/rule.module';
import { DbModule } from '@app/libs/db/db.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    RoleModule,
    ManageModule,
    RuleModule,
    DbModule,
  ],
})
export class AppModule {}
