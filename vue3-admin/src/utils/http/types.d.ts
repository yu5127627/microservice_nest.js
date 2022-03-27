import { Method, AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

export type RequestMethods = Extract<
Method,
'get' | 'post' | 'put' | 'delete' | 'patch' | 'option' | 'head'
>;

export interface PureHttpError extends AxiosError {
  isCancelRequest?: boolean;
}

export interface PureHttpResoponse extends AxiosResponse {
  config: PureHttpRequestConfig;
}

export interface PureHttpRequestConfig extends AxiosRequestConfig {
  beforeRequestCallback?: (request: PureHttpRequestConfig) => void;
  beforeResponseCallback?: (response: PureHttpResoponse) => void;
}

export interface Request {
  method?: Method = 'GET';
  url: string;
  data?: object = null;
  headers?: AxiosRequestHeaders;
  cache?: boolean = false;
}
