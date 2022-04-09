import { request, Response } from '../utils/http';

export const getMenu = (data?: TableListQuery|Attrs, cache?:boolean ) => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/menu/list',
    data: data,
    cache
  });
};

// 获取角色下菜单权限、
export const getRoleMenu = (roleId:number) => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/menu/list/' + roleId
  });
};

// 设置角色菜单权限、
export const setRoleMenu = (roleId:number, menuIds:number[]) => {
  return request<Response>({
    method: 'put',
    url: '/api/v1/menu/list/' + roleId,
    data: {
      menuIds
    }
  });
};
