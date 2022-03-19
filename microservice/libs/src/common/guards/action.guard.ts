import { Menu } from '@app/libs/db/entity/menu.entity';
import { RoleMenu } from '@app/libs/db/entity/roleMenu.entity';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { getRepository, In } from 'typeorm';

// 鉴权守卫  鉴别当前用户关联角色是否符合 api 要求的权限规则
@Injectable()
export class ActionGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 获取当前 api 所需要的规则数组
    const rules = this.reflector.get<string[]>('action', context.getHandler());

    if (rules && rules.length) {
      try {
        const { user } = context.switchToHttp().getRequest();
        // 获取 gateway 数据库下的菜单权限
        const roleMenuModel = getRepository(RoleMenu, 'gateway');
        const roleMenuList = await roleMenuModel.find({
          where: { roleId: user.roleId },
          select: ['menuId'],
        });
        const menuIds = roleMenuList.map((item) => item.menuId);
        // 获取 gateway 数据库下的菜单
        const menuModel = getRepository(Menu, 'gateway');
        const menulist = await menuModel.find({
          where: { id: In(menuIds), type: 3 }, // type=3 为权限
          select: ['action'],
        });
        // 角色下拥有的所有权限
        const actionList = menulist.map((item) => item.action);

        // 判断权限  不符合退出
        for (const rule of rules) {
          if (!actionList.includes(rule)) {
            throw new UnauthorizedException({
              error: '403',
              message: '权限不足',
            });
          }
        }
        return true;
      } catch (error) {
        // console.log(error);
        // throw new UnauthorizedException({
        //   error: error,
        //   message: error.message || error,
        // });
      }
    } else {
      return true;
    }
  }
}
