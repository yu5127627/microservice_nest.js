import { Result } from '@app/libs/common/interface/result.interface';
import { Controller, Get, ParseArrayPipe, Query } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { TagService } from './tag.service';
const DEFAULT_SERVICE = 'tagService';
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @MessagePattern({ tag: 'list' })
  async list(): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].list();
    return {
      code: 200,
      message: '菜单查询成功',
      result,
    };
  }
}
