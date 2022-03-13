import { Auth } from '@app/libs/common/decorator/auth.decorator';
import { Ip } from '@app/libs/common/decorator/ip.decorator';
import { Result } from '@app/libs/common/interface/result.interface';
import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Get,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LogService } from '../../log/log.service';
import { AuthService } from './auth.service';
import { ManageLocalLoginDto } from './dto/ManageLocalLogin.dto';
import { UAParser } from 'ua-parser-js';

@Controller('auth')
@ApiTags('认证')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly logService: LogService,
  ) {}

  @Post('login')
  @UseGuards(AuthGuard('ManageLocal'))
  @ApiOperation({ summary: '管理员登录' })
  async login(
    @Body() body: ManageLocalLoginDto,
    @Request() req,
    @Ip() clientIp: string,
  ): Promise<Result> {
    const token = await this.authService.createToken(req.user);
    req.user.ip = clientIp;
    const { ua } = UAParser(req.headers['user-agent']);
    req.user.ua = ua;
    await this.logService.loginLogCreate(req.user);
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
