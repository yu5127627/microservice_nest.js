import { lazyLoadDB } from '@app/libs/utils/utils';
import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';

@Module({
  controllers: [TagController],
  providers: [lazyLoadDB('blog', 'Tag'), TagService],
})
export class TagModule {}
