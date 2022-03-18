import { Result } from '@app/libs/common/interface/result.interface';
import { Controller, Get, ParseArrayPipe, Query } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { TagService } from './tag.service';
const DEFAULT_SERVICE = 'tagService';
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @MessagePattern({ tag: 'list' })
  async list(query): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].list(query.attrs);
    return {
      code: 200,
      message: '标签查询成功',
      result,
    };
  }

  @MessagePattern({ tag: 'create' })
  async create(body): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].create(body);
    return {
      code: 200,
      message: '标签创建成功',
      result,
    };
  }

  @MessagePattern({ tag: 'update' })
  async update(body): Promise<Result> {
    const { id, ...rest } = body;
    const result = await this[DEFAULT_SERVICE].update(id, rest);
    return {
      code: 200,
      message: '标签更新成功',
      result,
    };
  }

  @MessagePattern({ tag: 'delete' })
  async delete(body): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].delete(body.ids);
    return {
      code: 200,
      message: '标签删除成功',
      result,
    };
  }

  @MessagePattern({ tag: 'detail' })
  async detail(body): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].detail(body.id);
    return {
      code: 200,
      message: '标签查询成功',
      result,
    };
  }
}
