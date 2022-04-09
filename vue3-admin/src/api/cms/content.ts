
import { request, Response } from "@/utils/http";

// 获取内容列表
export const requestPages = (data: TableListQuery) => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/blog/content',
    data
  });
};

// 获取文章详情
export const requestRow = (id:number|string) => {
  return request<Response>({
    method: 'get',
    url: `/api/v1/blog/content/${id}`,
  });
};

