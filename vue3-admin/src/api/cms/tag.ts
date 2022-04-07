import { request, Response } from "@/utils/http";

// 获取标签列表
export const requestList = (data: TableListQuery|Attrs, cache?:boolean) => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/blog/tag/list',
    data,
    cache
  });
};
