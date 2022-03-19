import { Result } from '@app/libs/common/interface/result.interface';
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ContentPagesDto } from 'apps/gateways/src/blog/content/dto/ContentPages.dto';
import { ContentService } from './content.service';
const DEFAULT_SERVICE = 'contentService';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @MessagePattern({ content: 'pages' })
  async pages(query: ContentPagesDto): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].pages(query);
    return {
      code: 200,
      message: '内容分页查询成功',
      result,
    };
  }

  @MessagePattern({ content: 'create' })
  async create(body): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].create(body);
    return {
      code: 200,
      message: '内容创建成功',
      result,
    };
  }

  @MessagePattern({ content: 'update' })
  async update(body): Promise<Result> {
    const { id, ...rest } = body;
    const result = await this[DEFAULT_SERVICE].update(id, rest);
    return {
      code: 200,
      message: '内容更新成功',
      result,
    };
  }

  @MessagePattern({ content: 'delete' })
  async delete(body): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].delete(body.ids);
    return {
      code: 200,
      message: '内容删除成功',
      result,
    };
  }

  @MessagePattern({ content: 'detail' })
  async detail(body): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].detail(body.id);
    return {
      code: 200,
      message: '内容查询成功',
      result,
    };
  }
}
