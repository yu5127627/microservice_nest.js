import { Result } from '@app/libs/common/interface/result.interface';
import {
  Controller,
  Get,
  Header,
  Headers,
  Query,
  Redirect,
  Res,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ConfigService } from './system/config/config.service';

@Controller('/')
@ApiTags('日志')
export class GatewaysController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  @Header('Content-Type', 'text/html; charset=utf-8')
  @ApiOperation({ summary: '访问重定向' })
  loginLogPages(@Res() res): any {
    const host = res.req.headers.host;
    const hostRedirect: any = this.configService.getConfig('host_redirect');
    const item = hostRedirect.find((item) => item.host === host);
    if (!item) {
      return res.end('<h1>502 访问失败</h1>');
    } else {
      res.redirect(item.path);
      return res.end();
    }
  }
}
