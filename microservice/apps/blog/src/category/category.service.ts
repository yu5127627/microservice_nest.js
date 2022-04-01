import { Category } from '@app/libs/db/cms/category.entity';
import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
const DEFAULT_MODEL = 'categoryModel';
@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryModel: Repository<Category>,
  ) {}

  async list(attrs): Promise<Array<Category>> {
    try {
      if (attrs[0] === 'all') {
        return await this[DEFAULT_MODEL].find();
      }
      return await this[DEFAULT_MODEL].find({ select: attrs });
    } catch (error) {
      throw new RpcException(error);
      // console.log(error);
    }
  }

  async create(body): Promise<Category> {
    return await this[DEFAULT_MODEL].save(body);
  }

  async update(id: number, body): Promise<Category> {
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
