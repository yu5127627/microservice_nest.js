import { AxiosRequestHeaders } from 'axios';
import { request, Response } from '../utils/http';
// interface userType extends Promise<any> {
//   svg?: string;
//   code?: number;
//   info?: object;
// }

// 获取验证码
// export const getVerify = (): userType => {
//   return request({ url: '/captcha' });
// };

// 登录
export const getLogin = (data: LoginPayload) => {
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

// 刷新token
// export const refreshToken = (data: object) => {
//   return request({
//     method: 'POST',
//     url: '/refreshToken',
//     data
//   });
// };
