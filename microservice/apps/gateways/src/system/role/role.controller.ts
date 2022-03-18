import { Auth } from '@app/libs/common/decorator/auth.decorator';
import { Result } from '@app/libs/common/interface/result.interface';
import {
  Body,
  Controller,
  Post,
  Put,
  Param,
  Query,
  Delete,
  Get,
  ParseArrayPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RoleCreateDto } from './dto/RoleCreate.dto';
import { RoleListDto } from './dto/RoleList.dto';
import { RolePagesDto } from './dto/RolePages.dto';
import { RoleRulesDto } from './dto/RoleRules.dto';
import { RoleUpdateDto } from './dto/RoleUpdate.dto';
import { RoleService } from './role.service';
const DEFAULT_SERVICE = 'roleService';
@Controller('role')
@ApiTags('角色')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get('/actions/:id')
  @ApiOperation({ summary: '查询角色菜单' })
  @Auth(['menu:view', 'role:view'])
  async getActions(@Param('id') id: number): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].getActions(id);
    return {
      code: 200,
      message: '角色菜单查询成功',
      result,
    };
  }

  @Put('actions/:id')
  @ApiOperation({ summary: '修改角色权限' })
  @Auth(['role:update', 'role:update'])
  async setAction(
    @Param('id') id: number,
    @Body() body: RoleRulesDto,
  ): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].setAction(id, body);
    return {
      message: '角色权限修改成功',
      result,
    };
  }

  @Post()
  @ApiOperation({ summary: '创建角色' })
  @Auth(['role:create'])
  async create(@Body() body: RoleCreateDto): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].create(body);
    return {
      code: 200,
      message: '角色创建成功',
      result,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: '修改角色' })
  @Auth(['role:update'])
  async update(
    @Param('id') id: number,
    @Body() body: RoleUpdateDto,
  ): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].update(id, body);
    return {
      code: 200,
      message: '角色修改成功',
      result,
    };
  }

  @Delete()
  @ApiOperation({ summary: '删除角色' })
  @Auth(['role:delete'])
  async delete(
    @Body('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    ids: number[],
  ): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].delete(ids);
    return {
      code: 200,
      message: '角色删除成功',
      result,
    };
  }

  @Get()
  @ApiOperation({ summary: '分页查询' })
  @Auth(['role:view'])
  async pages(@Query() query: RolePagesDto): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].pages(query);
    return {
      code: 200,
      message: '角色查询成功',
      result,
    };
  }

  @Get('list')
  @ApiOperation({ summary: '列表查询' })
  @Auth(['role:view'])
  async list(
    @Query('attrs', new ParseArrayPipe({ items: String, separator: ',' }))
    attrs: Array<RoleListDto>,
  ): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].list(attrs);
    return {
      code: 200,
      message: '角色查询成功',
      result,
    };
  }
}
