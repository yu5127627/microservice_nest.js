import { Content } from '@app/libs/db/cms/content.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CmsService {
  constructor(
    @InjectRepository(Content)
    private readonly contentModel: Repository<Content>,
  ) {}
  async home() {
    const articleList = await this.contentModel.find({
      where: { status: 'up_rack' },
      order: {
        top: 'DESC',
        recom: 'DESC',
        ctime: 'DESC',
      },
      relations: ['tags', 'categorys'],
    });
    return { articleList };
  }
}
