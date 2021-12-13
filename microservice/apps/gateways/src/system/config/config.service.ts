import { Setting } from '@app/libs/db/entity/setting.entity';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
const DEFAULT_MODEL = 'settingModel';

// 继承 onApplicationBootstrap，在初始化所有模块后调用，但在侦听连接之前调用。
@Injectable()
export class ConfigService implements OnApplicationBootstrap {
  defaultSetting: any;
  defaultOption: any;
  constructor(
    @InjectRepository(Setting)
    private readonly settingModel: Repository<Setting>,
  ) {
    this.defaultSetting = null;
    this.defaultOption = null;
  }

  // 初始化所有模块后调用，加载环境变量
  async onApplicationBootstrap() {
    const setting = this.getConfig();
    // 做复制使用，保留初始化数据
    this.defaultSetting = JSON.parse(JSON.stringify(setting));
    this.defaultOption = JSON.parse(JSON.stringify(global.app.config.option));
  }

  // 过滤不可更新的数据
  private getConfig() {
    const setting = {};
    for (const [key, val] of Object.entries(global.app.config.setting)) {
      if (key.charAt(0) != '_') setting[key] = val;
    }
    return setting;
  }

  list(mode) {
    if (mode === 'admin') {
    } else if (mode === 'client') {
    }
    return {
      setting: this.defaultSetting,
      option: this.defaultOption,
    };
  }

  // 刷新环境变量
  async syncConfig() {
    const rows = await this[DEFAULT_MODEL].find({ order: { sort: 1 } });
    const sourceSetting = this.getConfig();
    const setting = Object.assign({}, this.defaultSetting, sourceSetting);
    for (const row of rows) {
      const valuetype = (row.valuetype || 'string').toLowerCase();
      let value: any = row.value;
      switch (valuetype) {
        case 'string':
          value = String(value);
          break;
        case 'number':
          value = Number(value);
          break;
        case 'boolean':
          value = Boolean(value);
          break;
        case 'json':
          try {
            value = JSON.parse(value);
          } catch (error) {
            console.error(
              `格式化系统设置${row.id} ${row.key} ${row.value}失败!`,
              error,
            );
            continue;
          }
          break;
      }
      if (row.group) {
        if (!setting[row.group]) {
          setting[row.group] = {};
        }
        setting[row.group][row.key] = value;
      } else {
        setting[row.key] = value;
      }
    }
    this.defaultSetting = setting;
    return setting;
  }
}
