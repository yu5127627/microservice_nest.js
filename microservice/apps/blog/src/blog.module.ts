import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { TagModule } from './tag/tag.module';
import { ContentModule } from './content/content.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from '@app/libs/db/db.module';

@Module({
  imports: [
    DbModule,
    // CategoryModule,
    TagModule,
    // ContentModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class BlogModule {}
