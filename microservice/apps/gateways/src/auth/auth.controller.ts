import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('ManageLocal'))
  @Post('login')
  async login(@Request() req) {
    const token = await this.authService.createToken(req.user);
    return {
      code: 200,
      message: '登录成功',
      result: token,
    };
  }
}
