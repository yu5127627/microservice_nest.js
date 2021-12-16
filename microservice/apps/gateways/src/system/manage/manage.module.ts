import { Manage } from '@app/libs/db/entity/manage.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { ManageController } from './manage.controller';
import { ManageService } from './manage.service';

@Module({
  imports: [TypeOrmModule.forFeature([Manage]), AuthModule],
  controllers: [ManageController],
  providers: [ManageService],
})
export class ManageModule {}
