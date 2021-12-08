import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class ManageLocalStrategy extends PassportStrategy(
  Strategy,
  'ManageLocal',
) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  // passport 的验证方法
  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateManage(username, password);
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
