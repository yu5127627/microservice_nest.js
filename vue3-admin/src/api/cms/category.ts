import { request, Response } from "@/utils/http";

// 获取分类列表
export const getCateList = (data) => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/category',
    data
  });
};
