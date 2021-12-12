import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

// 继承 onApplicationBootstrap，在初始化所有模块后调用，但在侦听连接之前调用。
@Injectable()
export class ConfigService implements OnApplicationBootstrap {
  defaultSetting: any;
  defaultOption: any;
  constructor() {
    this.defaultSetting = null;
    this.defaultOption = null;
  }

  // 初始化所有模块后调用，加载环境变量
  async onApplicationBootstrap() {
    // 过滤不可更新的数据
    const setting = {};
    for (const [key, val] of Object.entries(global.app.config.setting)) {
      if (key.charAt(0) != '_') setting[key] = val;
    }

    // 做复制使用，保留初始化数据
    this.defaultSetting = JSON.parse(JSON.stringify(setting));
    this.defaultOption = JSON.parse(JSON.stringify(global.app.config.option));
  }

  list() {
    return {
      setting: this.defaultSetting,
      option: this.defaultOption,
    };
  }
}
