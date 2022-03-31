import { request, Response } from "@/utils/http";

// 获取分类列表
export const requestList = (data: TableListQuery|Attrs, cache?:boolean) => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/blog/category/list',
    data,
    cache
  });
};
