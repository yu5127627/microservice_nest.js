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
  Req,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MenuCreateDto } from './dto/MenuCreate.dto';
import { MenuListDto } from './dto/MenuList.dto';
import { MenuUpdateDto } from './dto/MenuUpdate.dto';
import { MenuService } from './menu.service';
const DEFAULT_SERVICE = 'menuService';

@Controller('menu')
@ApiTags('菜单')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @ApiOperation({ summary: '创建菜单' })
  @Auth(['menu:create'])
  async create(@Body() body: MenuCreateDto): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].create(body);
    return {
      message: '菜单创建成功',
      result,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: '修改菜单' })
  @Auth(['menu:update'])
  async update(
    @Param('id') id: number,
    @Body() body: MenuUpdateDto,
  ): Promise<Result> {
    console.log(body);

    const result = await this[DEFAULT_SERVICE].update(id, body);
    return {
      code: 200,
      message: '菜单修改成功',
      result,
    };
  }

  @Delete()
  @ApiOperation({ summary: '删除菜单' })
  @Auth(['menu:delete'])
  async delete(
    @Body('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    ids: number[],
  ): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].delete(ids);
    return {
      code: 200,
      message: '菜单删除成功',
      result,
    };
  }

  @Get('list')
  @ApiOperation({ summary: '列表查询' })
  @Auth(['menu:view'])
  async list(
    @Query('attrs', new ParseArrayPipe({ items: String, separator: ',' }))
    attrs: Array<MenuListDto>,
    @Req() req,
  ): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].list(attrs, req.user);
    return {
      code: 200,
      message: '菜单查询成功',
      result,
    };
  }

  @Get('list/:roleId')
  @ApiOperation({ summary: '角色下菜单查询' })
  @Auth(['menu:view', 'role:view'])
  async getRoleMenu(@Param('roleId') roleId: number): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].getRoleMenu(roleId);
    return {
      code: 200,
      message: '角色下菜单查询成功',
      result,
    };
  }

  @Put('list/:roleId')
  @ApiOperation({ summary: '角色下菜单修改' })
  @Auth(['menu:update', 'role:update'])
  async setRoleMenu(
    @Param('roleId') roleId: number,
    @Body('menuIds') menuIds: number[],
  ): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].setRoleMenu(roleId, menuIds);
    return {
      code: 200,
      message: '角色下菜单修改成功',
      result,
    };
  }
}
