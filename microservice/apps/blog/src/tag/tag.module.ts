import { Tag } from '@app/libs/db/cms/tag.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createConnection, getConnection, getRepository } from 'typeorm';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';

@Module({
  imports: [],
  controllers: [TagController],
  providers: [
    {
      provide: 'BLOG_DB',
      useFactory: async () => {
        // 获取某个数据库的连接
        const blogDb = await new Promise((res) => {
          setTimeout(() => {
            res(null);
          });
        });
        // console.log(blogDb.options.entities);

        // 获取某个数据库下某张表的连接
        const tag = await getRepository('Tag', 'blog');
        const list = await tag.find();
        console.log(list);

        return blogDb;
      },
    },
    TagService,
  ],
})
export class TagModule {}
