import { Auth } from '@app/libs/common/decorator/auth.decorator';
import { Result } from '@app/libs/common/interface/result.interface';
import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { ManageLocalLoginDto } from './dto/ManageLocalLogin.dto';

@Controller('auth')
@ApiTags('认证')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('ManageLocal'))
  @ApiOperation({ summary: '管理员登录' })
  async login(
    @Body() body: ManageLocalLoginDto,
    @Request() req,
  ): Promise<Result> {
    const token = await this.authService.createToken(req.user);
    return {
      message: '登录成功',
      result: token,
    };
  }

  @Get('detail')
  @Auth()
  @ApiOperation({ summary: '用户信息' })
  async detail(@Request() req): Promise<Result> {
    const result = await this.authService.detail(req.user);
    return {
      message: '用户信息获取成功',
      result,
    };
  }
}
