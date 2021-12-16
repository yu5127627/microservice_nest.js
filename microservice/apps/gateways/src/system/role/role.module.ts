import { Role } from '@app/libs/db/entity/role.entity';
import { RoleMenu } from '@app/libs/db/entity/roleMenu.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  imports: [TypeOrmModule.forFeature([Role, RoleMenu]), AuthModule],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
