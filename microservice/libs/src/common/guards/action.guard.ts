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
    const rules = this.reflector.get<string[]>('rules', context.getHandler());
    if (rules && rules.length) {
      const { user } = context.switchToHttp().getRequest();
      // 查询角色权限
      const roleMenuModel = getRepository(RoleMenu);
      const roleMenuList = await roleMenuModel.find({
        where: { roleId: user.roleId },
        select: ['menuId'],
      });
      const menuIds = roleMenuList.map((item) => item.menuId);
      const menuModel = getRepository(Menu);
      const menulist = await menuModel.find({
        where: { id: In(menuIds), type: 3 },
        select: ['action'],
      });
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
    } else {
      return true;
    }
  }
}
