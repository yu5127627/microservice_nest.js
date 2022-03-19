import { Auth } from '@app/libs/common/decorator/auth.decorator';
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseArrayPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { TagCreate } from './dto/TagCreate.dto';
import { TagListDto } from './dto/TagList.dto';
import { TagUpdate } from './dto/TagUpdate.dto';

@Controller('tag')
@ApiTags('标签')
export class TagController {
  constructor(@Inject('BLOG_SERVICE') private readonly client: ClientProxy) {}

  @Get('/list')
  @ApiOperation({ summary: '查询标签列表' })
  @Auth(['tag:view'])
  list(
    @Query('attrs', new ParseArrayPipe({ items: String, separator: ',' }))
    attrs: Array<TagListDto>,
  ): Observable<any> {
    const pattern = { tag: 'list' };
    return this.client.send(pattern, { attrs });
  }

  @Post()
  @ApiOperation({ summary: '创建标签' })
  @Auth(['tag:create'])
  create(@Body() body: TagCreate): Observable<any> {
    const pattern = { tag: 'create' };
    return this.client.send(pattern, body);
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑标签' })
  @Auth(['tag:update'])
  update(@Param('id') id: number, @Body() body: TagUpdate): Observable<any> {
    const pattern = { tag: 'update' };
    return this.client.send(pattern, { id, ...body });
  }

  @Delete()
  @ApiOperation({ summary: '删除标签' })
  @Auth(['tag:delete'])
  delete(@Body('ids') ids: Array<number>): Observable<any> {
    const pattern = { tag: 'delete' };
    return this.client.send(pattern, { ids });
  }

  @Get(':id')
  @ApiOperation({ summary: '标签详情' })
  @Auth(['tag:view'])
  detail(@Param('id') id: number): Observable<any> {
    const pattern = { tag: 'detail' };
    return this.client.send(pattern, { id });
  }
}
