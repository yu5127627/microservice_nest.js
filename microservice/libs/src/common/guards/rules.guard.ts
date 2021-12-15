import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RulesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const rules = this.reflector.get<string[]>('rules', context.getHandler());
    if (rules && rules.length) {
      const request = context.switchToHttp().getRequest();
      // 查询角色权限
      // 判断权限  不符合退出
      console.log(request.user);

      console.log('rules', rules);
    } else {
      return true;
    }

    // if (!roles) {
    //   return true;
    // }
    // const request = context.switchToHttp().getRequest();
    // const user = request.user;
  }
}
