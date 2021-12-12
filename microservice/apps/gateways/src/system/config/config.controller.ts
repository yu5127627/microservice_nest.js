import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConfigService } from './config.service';
const DEFAULT_SERVICE = 'configService';

@Controller('config')
@ApiTags('配置')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  list() {
    return this[DEFAULT_SERVICE].list();
  }
}
