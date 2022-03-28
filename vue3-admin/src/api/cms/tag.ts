import { request, Response } from "@/utils/http";

// 获取标签列表
export const getTagList = (data) => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/tag',
    data
  });
};
