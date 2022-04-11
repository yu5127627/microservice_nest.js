import { lazyLoadDB } from '@app/libs/utils/utils';
import { Module } from '@nestjs/common';
import { CmsController } from './cms.controller';
import { CmsService } from './cms.service';

@Module({
  controllers: [CmsController],
  providers: [lazyLoadDB('blog', 'Content'), CmsService],
})
export class CmsModule {}
