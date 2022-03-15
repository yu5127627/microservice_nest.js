import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { CategoryModule } from './blog/category/category.module';

@Module({
  imports: [CategoryModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
