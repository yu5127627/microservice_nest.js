import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AuthGuard } from '../guards/auth.guard';
import { ActionGuard } from '../guards/action.guard';
import { AuthAction } from './action.decorator';

// 聚合装饰器 https://docs.nestjs.com/custom-decorators#decorator-composition
/**
 * 集成 action 验证 => token 解析
 * @param action {Array} 操作数据
 * @returns
 */
export function Auth(action: Array<string>) {
  return applyDecorators(
    AuthAction(action),
    UseGuards(AuthGuard, ActionGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: 'Unauthorized"' }),
  );
}
