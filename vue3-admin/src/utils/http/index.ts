import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { PureHttpError, PureHttpResoponse, PureHttpRequestConfig, Request, Response as res } from './types';
import md5 from 'md5';
import qs from 'qs';
import { loadEnv } from '@/build';
import { toast } from '../message';

// 加载环境变量 VITE_PROXY_DOMAIN（开发环境）  VITE_PROXY_DOMAIN_REAL（打包后的线上环境）
const { VITE_PROXY_DOMAIN, VITE_PROXY_DOMAIN_REAL } = loadEnv();

// 相关配置请参考：www.axios-js.com/zh-cn/docs/#axios-request-config-1
const defaultConfig: AxiosRequestConfig = {
  baseURL: process.env.NODE_ENV === 'production' ? VITE_PROXY_DOMAIN_REAL : VITE_PROXY_DOMAIN,
  // 当前使用mock模拟请求，将baseURL制空，如果你的环境用到了http请求，请删除下面的baseURL启用上面的baseURL，并将11行、16行代码注释取消
  timeout: 10000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  // 数组格式参数序列化
  paramsSerializer: (params) => qs.stringify(params, { indices: false }),
  transformRequest: [
    (data, config) => {
      // @ts-ignore
      switch (config['Content-Type'].toLowerCase()) {
        case 'application/x-www-form-urlencoded': {
          return qs.stringify(data);
        }
        case 'multipart/form-data;charset=utf-8': {
          return data;
        }
        default: {
          return JSON.stringify(data);
        }
      }
    }
  ]
};

class PureHttp {
  private static caches: any = {};
  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }
  // 初始化配置对象
  private static initConfig: PureHttpRequestConfig = {};

  // 保存当前Axios实例对象
  private static axiosInstance: AxiosInstance = Axios.create(defaultConfig);

  // 请求拦截
  private httpInterceptorsRequest(): void {
    PureHttp.axiosInstance.interceptors.request.use(
      (config: PureHttpRequestConfig) => {
        const $config = config;
        // 优先判断post/get等方法是否传入回掉，否则执行初始化设置等回掉
        if (typeof config.beforeRequestCallback === 'function') {
          config.beforeRequestCallback($config);
          return $config;
        }
        if (PureHttp.initConfig.beforeRequestCallback) {
          PureHttp.initConfig.beforeRequestCallback($config);
          return $config;
        }
        const token = sessionStorage.getItem('token');
        if (token) {
          // @ts-ignore
          config.headers['Authorization'] = 'Bearer ' + token;
          return $config;
        }
        return $config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  // 响应拦截
  private httpInterceptorsResponse(): void {
    const instance = PureHttp.axiosInstance;
    instance.interceptors.response.use(
      (response: PureHttpResoponse) => {
        const $config = response.config;

        // 优先判断post/get等方法是否传入回掉，否则执行初始化设置等回掉
        if (typeof $config.beforeResponseCallback === 'function') {
          $config.beforeResponseCallback(response);
          return response.data;
        }
        if (PureHttp.initConfig.beforeResponseCallback) {
          PureHttp.initConfig.beforeResponseCallback(response);
          return response.data;
        }
        return response.data;
      },
      (error: PureHttpError) => {
        const $error = error;
        // 所有的响应异常 区分来源为取消请求/非取消请求
        $error.isCancelRequest = Axios.isCancel($error);
        return Promise.reject($error.response?.data);
      }
    );
  }

  // 通用请求工具函数
  public request<T>({
    method = 'GET',
    url,
    data = {},
    cache = false,
    headers = {}
  }: Request): Promise<T> {
    let key: string;
    let params: object = {};
    if (cache) {
      key = md5(data ? method + url + JSON.stringify(data) : method + url);
      if (PureHttp.caches[key]) return PureHttp.caches[key];
      PureHttp.caches[key] = null;
    }
    if (process.env.NODE_ENV === 'development') {
      console.log(
        `method: ${method} / url: ${url} / body: ${JSON.stringify(
          { ...params, ...data }
        )} / headers: ${JSON.stringify(headers)}`
      );
    }
    if (method.toLocaleUpperCase() === 'GET') {
      params = data;
      data = {};
    }
    // 单独处理自定义请求/响应回掉
    return new Promise((resolve, reject) => {
      PureHttp.axiosInstance
        .request({ method, url, params, data, headers })
        .then((response: any) => {
          if (cache) PureHttp.caches[key] = response;
          resolve(response);
        })
        .catch((error) => {
          switch (error.code) {
            case 401:
              sessionStorage.removeItem('token');
              toast(error.message, 'error');
              break;
            case 400:
            case 403:
              toast(error.message, 'error');
              break;
          }
          reject(error);
        });
    });
  }
}

const http = new PureHttp();
export const request = http.request;
export type Response = res
