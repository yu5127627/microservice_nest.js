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
import { CategoryCreateDto } from './dto/CategoryCreate.dto';
import { CategoryListDto } from './dto/CategoryList.dto';
import { CategoryUpdateDto } from './dto/CategoryUpdate.dto';

@Controller('category')
@ApiTags('分类')
export class CategoryController {
  constructor(@Inject('BLOG_SERVICE') private readonly client: ClientProxy) {}

  @Get('/list')
  @ApiOperation({ summary: '查询分类列表' })
  @Auth(['tag:view'])
  list(
    @Query('attrs', new ParseArrayPipe({ items: String, separator: ',' }))
    attrs: Array<CategoryListDto>,
  ): Observable<any> {
    const pattern = { tag: 'list' };
    return this.client.send(pattern, { attrs });
  }

  @Post()
  @ApiOperation({ summary: '创建分类' })
  @Auth(['tag:create'])
  create(@Body() body: CategoryCreateDto): Observable<any> {
    const pattern = { tag: 'create' };
    return this.client.send(pattern, body);
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑分类' })
  @Auth(['tag:update'])
  update(
    @Param('id') id: number,
    @Body() body: CategoryUpdateDto,
  ): Observable<any> {
    const pattern = { tag: 'update' };
    return this.client.send(pattern, { id, ...body });
  }

  @Delete()
  @ApiOperation({ summary: '删除分类' })
  @Auth(['tag:delete'])
  delete(@Body('ids') ids: Array<number>): Observable<any> {
    const pattern = { tag: 'delete' };
    return this.client.send(pattern, { ids });
  }

  @Get(':id')
  @ApiOperation({ summary: '分类详情' })
  @Auth(['tag:view'])
  detail(@Param('id') id: number): Observable<any> {
    const pattern = { tag: 'detail' };
    return this.client.send(pattern, { id });
  }
}
