import { AxiosRequestHeaders } from 'axios';
import { request, Response } from '../utils/http';

interface GetMenu {
  attrs: string
}

export const getMenu = (data:GetMenu) => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/menu/list',
    data
  });
};
