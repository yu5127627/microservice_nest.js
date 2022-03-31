import { request, Response } from '../utils/http';

export const getMenu = (data?: TableListQuery|Attrs, cache?:boolean ) => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/menu/list',
    data: data,
    cache
  });
};
