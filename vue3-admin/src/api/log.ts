import { request, Response } from "@/utils/http";

// 获取登录日志列表
export const getLogLoginList = (data) => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/log/login',
    data
  });
};
