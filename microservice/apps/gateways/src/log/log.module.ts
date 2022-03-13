import { LoginLog } from '@app/libs/db/entity/loginLog.entity';
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../system/auth/auth.module';
import { LogController } from './log.controller';
import { LogService } from './log.service';

@Module({
  imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([LoginLog])],
  controllers: [LogController],
  providers: [LogService],
  exports: [LogService],
})
export class LogModule {}
