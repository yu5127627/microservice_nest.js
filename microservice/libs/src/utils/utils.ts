import { getRepository } from 'typeorm';
import * as moment from 'moment';

export const parseTime = (time: string, format = 'YYYY-MM-DD HH:mm:ss') => {
  return moment(time).format(format);
};

/**
 * 等待某段时间后向后执行
 * @param wait {number} 等待时长
 */
export const sleep = (wait = 300) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, wait);
  });
};

/**
 * 延迟加载数据库
 * @param database {string} 数据库名称
 * @param tableName {string} 数据表名称
 * @param wait {number} 延迟时间
 * @returns
 */
export const lazyLoadDB = (database = 'default', tableName, wait = 1000) => {
  return {
    provide: tableName + 'Repository',
    useFactory: async () => {
      try {
        await sleep(wait);
        // 获取某个数据库下某张表的连接
        return await getRepository(tableName, database);
      } catch (error) {
        console.log(error);
      }
    },
  };
};
