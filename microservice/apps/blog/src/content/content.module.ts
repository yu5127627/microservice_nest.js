import { lazyLoadDB } from '@app/libs/utils/utils';
import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';

@Module({
  controllers: [ContentController],
  providers: [
    lazyLoadDB('blog', 'Content'),
    lazyLoadDB('blog', 'Tag'),
    lazyLoadDB('blog', 'Category'),
    ContentService,
  ],
})
export class ContentModule {}
