import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('tag')
@ApiTags('标签')
export class TagController {
  constructor(@Inject('BLOG_SERVICE') private readonly client: ClientProxy) {}

  @Get('/list')
  @ApiOperation({ summary: '查询标签列表' })
  findArticleByHot() {
    const pattern = { tag: 'list' };
    return this.client.send(pattern, { body: 1 });
  }
}
