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
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { ContentCreateDto } from './dto/ContentCreate.dto';
import { ContentUpdateDto } from './dto/ContentUpdate.dto';
@Controller('content')
@ApiTags('内容')
export class ContentController {
  constructor(@Inject('BLOG_SERVICE') private readonly client: ClientProxy) {}

  @Post()
  @ApiOperation({ summary: '创建内容' })
  @Auth(['tag:create'])
  create(@Body() body: ContentCreateDto): Observable<any> {
    const pattern = { tag: 'create' };
    return this.client.send(pattern, body);
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑内容' })
  @Auth(['tag:update'])
  update(
    @Param('id') id: number,
    @Body() body: ContentUpdateDto,
  ): Observable<any> {
    const pattern = { tag: 'update' };
    return this.client.send(pattern, { id, ...body });
  }

  @Delete()
  @ApiOperation({ summary: '删除内容' })
  @Auth(['tag:delete'])
  delete(@Body('ids') ids: Array<number>): Observable<any> {
    const pattern = { tag: 'delete' };
    return this.client.send(pattern, { ids });
  }

  @Get(':id')
  @ApiOperation({ summary: '内容详情' })
  @Auth(['tag:view'])
  detail(@Param('id') id: number): Observable<any> {
    const pattern = { tag: 'detail' };
    return this.client.send(pattern, { id });
  }
}
