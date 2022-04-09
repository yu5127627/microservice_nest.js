import { RequestMethod } from '@nestjs/common';

// 取消路由前缀白名单
export const WhiteList = [
  { path: 'ssr/cms/welcome', method: RequestMethod.GET },
  { path: 'ssr/cms/home', method: RequestMethod.GET },
  { path: 'ssr/cms/tag', method: RequestMethod.GET },
  { path: 'ssr/cms/timeline', method: RequestMethod.GET },
  { path: 'ssr/cms/article', method: RequestMethod.GET },
];
