import { Auth } from '@app/libs/common/decorator/auth.decorator';
import { Result } from '@app/libs/common/interface/result.interface';
import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginLogPagesDto } from './dto/LoginLogPages.dto';
import { LogService } from './log.service';

@Controller('log')
@ApiTags('日志')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Get('/login')
  @Auth(['login_log:view'])
  @ApiOperation({ summary: '登录日志查询' })
  async loginLogPages(@Query() query: LoginLogPagesDto): Promise<Result> {
    const result = await this.logService.loginLogPages(query);
    return {
      code: 200,
      message: '登录日志查询成功',
      result,
    };
  }
}
