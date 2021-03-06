import { Tag } from '@app/libs/db/cms/tag.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
const DEFAULT_MODEL = 'tagModel';
@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag) private readonly tagModel: Repository<Tag>,
  ) {}

  async list(attrs): Promise<Array<Tag>> {
    if (attrs[0] === 'all') {
      return await this[DEFAULT_MODEL].find();
    }
    return await this[DEFAULT_MODEL].find({ select: attrs });
  }

  async create(body): Promise<Tag> {
    return await this[DEFAULT_MODEL].save(body);
  }

  async update(id: number, body): Promise<Tag> {
    await this[DEFAULT_MODEL].update(id, body);
    return await this[DEFAULT_MODEL].findOne(id);
  }

  async delete(ids: number[]): Promise<any> {
    return await this[DEFAULT_MODEL].delete(ids);
  }

  async detail(id) {
    return await this[DEFAULT_MODEL].findOne(id);
  }
}
