import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval } from '@nestjs/schedule';
import { ConfigService } from 'apps/gateways/src/system/config/config.service';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);
  constructor(private readonly configService: ConfigService) {}

  // 每分钟 3 秒时执行
  // @Cron('3 * * * * *')
  // handleCron() {
  //   console.log('11111');
  //   this.logger.debug('Called when the current second is 45');
  // }

  // 10s 执行一次 刷新环境变量
  @Interval(10000)
  async cronSyncConfig() {
    await this.configService.syncConfig();
  }

  // 每天 23.01 执行一次
  @Cron('0 1 23 * * *')
  handleCron() {
    console.log('11111');
    this.logger.debug('Called when the current second is 45');
  }
}
