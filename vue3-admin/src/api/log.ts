import { request, Response } from "@/utils/http";

// 获取登录日志列表
export const requestLogLoginPages = (data: TableListQuery) => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/log/login',
    data
  });
};
