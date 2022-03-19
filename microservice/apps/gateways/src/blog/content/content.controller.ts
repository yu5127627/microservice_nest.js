import { Auth } from '@app/libs/common/decorator/auth.decorator';
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { ContentCreateDto } from './dto/ContentCreate.dto';
import { ContentPagesDto } from './dto/ContentPages.dto';
import { ContentUpdateDto } from './dto/ContentUpdate.dto';
@Controller('content')
@ApiTags('内容')
export class ContentController {
  constructor(@Inject('BLOG_SERVICE') private readonly client: ClientProxy) {}

  @Get()
  // @Auth(['login_log:view'])
  @ApiOperation({ summary: '内容分页查询' })
  contentPages(@Query() query: ContentPagesDto): Observable<any> {
    const pattern = { content: 'pages' };
    return this.client.send(pattern, query);
  }

  @Post()
  @ApiOperation({ summary: '创建内容' })
  // @Auth(['content:create'])
  create(@Body() body: ContentCreateDto): Observable<any> {
    const pattern = { content: 'create' };
    return this.client.send(pattern, body);
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑内容' })
  // @Auth(['content:update'])
  update(
    @Param('id') id: number,
    @Body() body: ContentUpdateDto,
  ): Observable<any> {
    const pattern = { content: 'update' };
    return this.client.send(pattern, { id, ...body });
  }

  @Delete()
  @ApiOperation({ summary: '删除内容' })
  // @Auth(['content:delete'])
  delete(@Body('ids') ids: Array<number>): Observable<any> {
    const pattern = { content: 'delete' };
    return this.client.send(pattern, { ids });
  }

  @Get(':id')
  @ApiOperation({ summary: '内容详情' })
  // @Auth(['content:view'])
  detail(@Param('id') id: number): Observable<any> {
    const pattern = { content: 'detail' };
    return this.client.send(pattern, { id });
  }
}
