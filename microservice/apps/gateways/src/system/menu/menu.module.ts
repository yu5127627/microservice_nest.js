import { Menu } from '@app/libs/db/entity/menu.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';

@Module({
  imports: [TypeOrmModule.forFeature([Menu]), AuthModule],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
