import { Result } from '@app/libs/common/interface/result.interface';
import { Controller, Get, Param, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ConfigService } from './config.service';
const DEFAULT_SERVICE = 'configService';

@Controller('config')
@ApiTags('配置')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get('/:mode')
  @ApiOperation({ summary: '获取配置列表' })
  list(@Param('mode') mode: string): Result {
    const result = this[DEFAULT_SERVICE].list(mode);
    return { result };
  }

  @Put('refresh')
  @ApiOperation({ summary: '刷新配置列表' })
  async refresh(): Promise<Result> {
    const result = await this[DEFAULT_SERVICE].syncConfig();
    return { result };
  }
}
