import { Module } from '@nestjs/common';
import { LibsService } from './libs.service';
import { CommonModule } from './common/common.module';
import { DbModule } from './db/db.module';
import { CronService } from './utils/cron.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from 'apps/gateways/src/system/config/config.module';

@Module({
  imports: [CommonModule, DbModule, ScheduleModule.forRoot(), ConfigModule],
  providers: [LibsService, CronService],
  exports: [LibsService, CronService],
})
export class LibsModule {}
