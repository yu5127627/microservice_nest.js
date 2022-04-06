import { Menu } from '@app/libs/db/entity/menu.entity';
import { Role } from '@app/libs/db/entity/role.entity';
import { RoleMenu } from '@app/libs/db/entity/roleMenu.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '../config/config.module';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Menu, Role, RoleMenu]),
    AuthModule,
    ConfigModule,
  ],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
