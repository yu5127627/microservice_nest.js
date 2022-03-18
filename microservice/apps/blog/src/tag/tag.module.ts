import { Tag } from '@app/libs/db/cms/tag.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'apps/gateways/src/system/auth/auth.module';
import { createConnection, getConnection, getRepository } from 'typeorm';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';

@Module({
  imports: [AuthModule],
  controllers: [TagController],
  providers: [
    {
      provide: 'TagRepository',
      useFactory: async () => {
        try {
          // 获取某个数据库的连接
          const blogDb = await new Promise((res) => {
            setTimeout(() => {
              res(null);
            }, 1000);
          });
          // 获取某个数据库下某张表的连接
          return await getRepository('Tag', 'blog');
        } catch (error) {
          console.log(error);
        }
      },
    },
    TagService,
  ],
})
export class TagModule {}
