import { request, Response } from '../utils/http';

export const getMenu = (data?: Attrs ) => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/menu/list',
    data: data || { attrs: 'all' },
    cache: true
  });
};
