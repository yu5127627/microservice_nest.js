import { request, Response } from "@/utils/http";

// 获取角色列表
export const requestPages = (data: TableListQuery) => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/role',
    data
  });
};
