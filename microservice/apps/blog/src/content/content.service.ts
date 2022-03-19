import { Pagination } from '@app/libs/common/interface/pagination.interface';
import { Content } from '@app/libs/db/cms/content.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { ContentPageWhere } from './interface/ContentPageWhere.interface';
const DEFAULT_MODEL = 'contentModel';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private readonly contentModel: Repository<Content>,
  ) {}

  async create(body): Promise<Content> {
    return await this[DEFAULT_MODEL].save(body);
  }

  async update(id: number, body): Promise<Content> {
    await this[DEFAULT_MODEL].update(id, body);
    return await this[DEFAULT_MODEL].findOne(id);
  }

  async delete(ids: number[]): Promise<any> {
    return await this[DEFAULT_MODEL].delete(ids);
  }

  async detail(id: number): Promise<Content> {
    return await this[DEFAULT_MODEL].findOne(id);
  }

  async pages(query): Promise<Pagination<Content>> {
    const { title, top, status, page, limit } = query;
    const filter: ContentPageWhere = {
      skip: (page - 1) * limit,
      take: limit,
      where: {},
    };

    if (title) filter.where.title = Like(`%${title}%`);
    if (top) filter.where.top = top === 'true' ? true : false;
    if (status) filter.where.status = status;

    const [rows, total] = await this[DEFAULT_MODEL].findAndCount(filter);
    return {
      rows,
      total,
      pager: {
        page,
        limit,
        total,
        offset: (page - 1) * limit,
        pageTotal: Math.ceil(total / limit),
      },
    };
  }
}
