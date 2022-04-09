import { Module } from '@nestjs/common';
import { CmsController } from './cms.controller';

@Module({
  controllers: [CmsController],
})
export class CmsModule {}
