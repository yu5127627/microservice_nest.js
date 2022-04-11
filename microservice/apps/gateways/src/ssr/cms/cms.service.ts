import { Content } from '@app/libs/db/cms/content.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { marked } from 'marked';
@Injectable()
export class CmsService {
  constructor(
    @InjectRepository(Content)
    private readonly contentModel: Repository<Content>,
  ) {}

  async home() {
    const articleList = await this.contentModel.find({
      where: { status: 'up_rack' },
      select: ['id', 'content', 'ctime', 'recom', 'scan', 'title', 'top'],
      order: {
        top: 'DESC',
        recom: 'DESC',
        ctime: 'DESC',
      },
      relations: ['tags', 'categorys'],
    });

    return { articleList };
  }

  async article(id) {
    const article = await this.contentModel.findOne(id, {
      where: { status: 'up_rack' },
      select: ['id', 'content', 'ctime', 'recom', 'scan', 'title', 'top'],
      relations: ['tags', 'categorys'],
    });
    article.content = marked(article.content);
    return article;
  }
}
