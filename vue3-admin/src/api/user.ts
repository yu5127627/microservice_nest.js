import { AxiosRequestHeaders } from "axios";
import { request, Response } from "../utils/http";

interface userType extends Promise<any> {
  svg?: string;
  code?: number;
  info?: object;
}

// 获取验证码
export const getVerify = (): userType => {
  return request({ url:"/captcha" });
};

// 登录
export const getLogin = (data: object) => {
  return request({ method:'POST', url:'/login', data });
};

// 刷新token
export const refreshToken = (data: object) => {
  return request({
    method: 'POST',
    url: "/refreshToken",
    data
  });
};

export const getSetting = (data:any, headers?:AxiosRequestHeaders) => {
  return request<Response>({
    method: 'get',
    url: 'http://qapp.lumakj.cn/api/admin/refreshsetting',
    data,
    headers
  });
};

// export const searchVague = (data: object) => {
//   return request("post", "/searchVague", { data });
// };
