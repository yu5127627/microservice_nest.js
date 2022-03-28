import { request, Response } from "@/utils/http";

// 获取角色列表
export const getRoleList = (data) => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/role',
    data
  });
};
