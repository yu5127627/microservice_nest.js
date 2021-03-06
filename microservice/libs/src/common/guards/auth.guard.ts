import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from 'apps/gateways/src/system/auth/auth.service';
import { Observable } from 'rxjs';

// token 验证
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;
    if (!token) {
      throw new UnauthorizedException({
        error: '401',
        message: '请先登录！！！',
      });
    }
    try {
      const user = this.authService.vertifyToken(
        token,
        process.env.TOKEN_SECRET,
      );
      request.user = user;
      return true;
    } catch (error) {
      throw new UnauthorizedException({
        error: '401',
        message: '登录状态异常，请重新登录',
      });
    }
  }
}
