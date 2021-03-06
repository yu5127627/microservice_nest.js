import { Pagination } from '@app/libs/common/interface/pagination.interface';
import { Category } from '@app/libs/db/cms/category.entity';
import { Content } from '@app/libs/db/cms/content.entity';
import { Tag } from '@app/libs/db/cms/tag.entity';
import { getOrder } from '@app/libs/utils/db.utils';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Like, Repository } from 'typeorm';
import { ContentPageWhere } from './interface/ContentPageWhere.interface';
const DEFAULT_MODEL = 'contentModel';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private readonly contentModel: Repository<Content>,
    @InjectRepository(Tag)
    private readonly tagModel: Repository<Tag>,
    @InjectRepository(Category)
    private readonly categoryModel: Repository<Category>,
  ) {}

  async create(body): Promise<Content> {
    const { tagIds, cateIds, ...props } = body;
    const taglist = await this.tagModel.find({ where: { id: In(tagIds) } });
    const catelist = await this.categoryModel.find({
      where: { id: In(cateIds) },
    });
    props.categorys = catelist;
    props.tags = taglist;
    const content = await this[DEFAULT_MODEL].save(props);
    return content;
  }

  async update(id: number, body): Promise<Content> {
    await this[DEFAULT_MODEL].update(id, body);
    return await this[DEFAULT_MODEL].findOne(id);
  }

  async delete(ids: number[]): Promise<any> {
    return await this[DEFAULT_MODEL].delete(ids);
  }

  async detail(id: number): Promise<Content> {
    return await this[DEFAULT_MODEL].findOne(id, {
      select: ['content', 'id', 'recom', 'status', 'title', 'top'],
      loadRelationIds: true,
    });
  }

  async pages(query): Promise<Pagination<Content>> {
    const { title, top, status, page, limit, orderBy } = query;
    const filter: ContentPageWhere = {
      skip: (page - 1) * limit,
      take: limit,
      where: {},
      order: getOrder(orderBy),
      loadRelationIds: true,
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
