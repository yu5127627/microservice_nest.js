import { request, Response } from "@/utils/http";

// 登录
export const login = (data: Manage.LoginDto) => {
  return request<Response>({
    method: 'POST',
    url: '/api/v1/auth/login',
    data
  });
};

// 获取用户信息
export const getUserInfo = () => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/auth/detail',
  });
};

// 获取管理员列表
export const getManageList = (data:TableListQuery) => {
  return request<Response>({
    method: 'get',
    url: '/api/v1/manage',
    data
  });
};
