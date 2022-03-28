import { request, Response } from "@/utils/http";

// 获取管理员列表
export const getManageList = (data) => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/manage',
    data
  });
};
