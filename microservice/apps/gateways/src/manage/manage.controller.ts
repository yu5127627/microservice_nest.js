import { Result } from '@app/libs/common/interface/result.interface';
import { Manage } from '@app/libs/db/entity/manage.entity';
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
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ManageCreateDto } from './dto/manageCreate.dto';
import { ManagePagesDto } from './dto/managePages.dto';
import { ManageUpdateDto } from './dto/manageUpdate.dto';
import { ManageService } from './manage.service';

@Controller('manage')
@ApiTags('管理员')
export class ManageController {
  constructor(
    private readonly managerService: ManageService,
    @InjectRepository(Manage) private readonly manageModel: Repository<Manage>,
  ) {}

  @Post()
  @ApiOperation({ summary: '创建管理员' })
  async create(@Body() body: ManageCreateDto): Promise<Result> {
    const result = await this.managerService.create(body);
    return {
      code: 200,
      message: '管理员创建成功',
      result,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: '修改管理员' })
  async update(
    @Param('id') id: number,
    @Body() body: ManageUpdateDto,
  ): Promise<Result> {
    const result = await this.managerService.update(id, body);

    return {
      code: 200,
      message: '管理员修改成功',
      result,
    };
  }

  @Delete()
  @ApiOperation({ summary: '删除管理员' })
  async delete(
    @Query('id', new ParseArrayPipe({ items: Number, separator: ',' }))
    ids: number[],
  ): Promise<Result> {
    const result = await this.managerService.delete(ids);
    return {
      code: 200,
      message: '管理员删除成功',
      result,
    };
  }

  @Get()
  @ApiOperation({ summary: '分页查询' })
  async pages(@Query() query: ManagePagesDto): Promise<Result> {
    const result = await this.managerService.pages(query);
    return {
      code: 200,
      message: '管理员查询成功',
      result,
    };
  }

  @Get('list')
  async list() {
    const result = await this.manageModel.createQueryBuilder().getMany();
    return {
      code: 200,
      message: '管理员查询成功',
      result,
    };
  }
}
