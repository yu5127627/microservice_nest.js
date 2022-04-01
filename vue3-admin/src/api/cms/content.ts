
import { request, Response } from "@/utils/http";

// 获取内容列表
export const requestPages = (data: TableListQuery) => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/blog/content',
    data
  });
};
