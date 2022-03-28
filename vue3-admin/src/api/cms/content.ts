
import { request, Response } from "@/utils/http";

// 获取内容列表
export const getContentList = (data) => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/content',
    data
  });
};
