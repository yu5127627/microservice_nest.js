import { Menu } from '@app/libs/db/entity/menu.entity';
import { Role } from '@app/libs/db/entity/role.entity';
import { RoleMenu } from '@app/libs/db/entity/roleMenu.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { TokenPayload } from '../auth/interface/TokenPayload';
import { ConfigService } from '../config/config.service';
import { MenuCreateDto } from './dto/MenuCreate.dto';
import { MenuUpdateDto } from './dto/MenuUpdate.dto';
const DEFAULT_MODEL = 'menuModel';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu) private readonly menuModel: Repository<Menu>,
    @InjectRepository(Role) private readonly roleModel: Repository<Role>,
    @InjectRepository(RoleMenu)
    private readonly roleMenuModel: Repository<RoleMenu>,
    private readonly configService: ConfigService,
  ) {}

  async create(body: MenuCreateDto): Promise<Menu> {
    return await this[DEFAULT_MODEL].save(body);
  }

  async update(id: number, body: MenuUpdateDto): Promise<Menu> {
    await this[DEFAULT_MODEL].update(id, body);
    return await this[DEFAULT_MODEL].findOne(id);
  }

  async delete(ids: number[]): Promise<any> {
    return await this[DEFAULT_MODEL].delete(ids);
  }

  async list(attrs, user: TokenPayload): Promise<Array<Menu>> {
    const role = await this.roleModel.findOne(user.roleId);
    const topLevel = this.configService.getConfig('top_level');
    const where: any = {};
    // 判断当前角色是否为顶级角色(顶级角色查询所有)
    if (role.level !== topLevel) where.id = In(user.menuIds);
    if (attrs[0] === 'all') {
      return await this[DEFAULT_MODEL].find(where);
    }
    return await this[DEFAULT_MODEL].find({ where, select: attrs });
  }

  async getRoleMenu(roleId: number): Promise<Array<number>> {
    // 角色关联的菜单列表
    const roleMenuList = await this.roleMenuModel.find({
      where: { roleId },
      select: ['menuId'],
    });
    // 菜单ID列表
    const menuIds = roleMenuList.map((item) => item.menuId);
    const menulist = await this.menuModel.find({
      where: { id: In(menuIds) },
    });
    return menulist.map((item) => item.id);
  }

  async setRoleMenu(roleId: number, menuIds: Array<number>): Promise<void> {
    await this.roleMenuModel.delete({ roleId });
    const arr = menuIds.map((item) => {
      return {
        roleId,
        menuId: item,
      };
    });
    await this.roleMenuModel.save(arr);
  }
}
