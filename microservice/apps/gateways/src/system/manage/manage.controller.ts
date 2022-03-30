import { Auth } from '@app/libs/common/decorator/auth.decorator';
import { Result } from '@app/libs/common/interface/result.interface';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseArrayPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ManageCreateDto } from './dto/ManageCreate.dto';
import { ManagePagesDto } from './dto/ManagePages.dto';
import { ManageUpdateDto } from './dto/ManageUpdate.dto';
import { ManageService } from './manage.service';
const DEFAULT_SERVICE = 'managerService';

@Controller('manage')
@ApiTags('管理员')
export class ManageController {
  constructor(private readonly managerService: ManageService) {}

  @Post()
  @ApiOperation({ summary: '创建管理员' })
  @Auth(['manage:create'])
  async create(@Body() body: ManageCreateDto): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].create(body);
    return {
      code: 200,
      message: '管理员创建成功',
      result,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: '修改管理员' })
  @Auth(['manange:update'])
  async update(
    @Param('id') id: number,
    @Body() body: ManageUpdateDto,
  ): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].update(id, body);
    return {
      code: 200,
      message: '管理员修改成功',
      result,
    };
  }

  @Delete()
  @ApiOperation({ summary: '删除管理员' })
  @Auth(['manage:delete'])
  async delete(
    @Body('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    ids: number[],
  ): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].delete(ids);
    return {
      code: 200,
      message: '管理员删除成功',
      result,
    };
  }

  @Get()
  @ApiOperation({ summary: '分页查询' })
  @Auth(['manage:view'])
  async pages(@Query() query: ManagePagesDto): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].pages(query);
    return {
      code: 200,
      message: '管理员查询成功',
      result,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: '管理员详情' })
  @Auth(['manage:view'])
  async detail(@Param('id') id: number): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].detail(id);
    return {
      message: '管理员信息查询成功',
      result,
    };
  }
}
