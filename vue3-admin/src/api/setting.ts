import { request, Response } from "@/utils/http";

// 获取配置
export const requestDefaultConfig = () => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/setting/' + 'admin',
  });
};
