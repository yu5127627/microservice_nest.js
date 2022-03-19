import { lazyLoadDB } from '@app/libs/utils/utils';
import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  controllers: [CategoryController],
  providers: [lazyLoadDB('blog', 'Category'), CategoryService],
})
export class CategoryModule {}
