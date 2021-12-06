import { Module } from '@nestjs/common';
import { LibsService } from './libs.service';
import { CommonModule } from './common/common.module';
import { DbModule } from './db/db.module';

@Module({
  providers: [LibsService],
  exports: [LibsService],
  imports: [CommonModule, DbModule],
})
export class LibsModule {}
