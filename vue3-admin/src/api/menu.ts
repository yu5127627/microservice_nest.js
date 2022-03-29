import { request, Response } from '../utils/http';

export const getMenu = (data: Attrs = { attrs: 'all' }) => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/menu/list',
    data
  });
};
