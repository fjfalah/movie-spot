import axios, { Method, AxiosRequestConfig, AxiosPromise } from 'axios';

import { API_URL, API_URL_KEY } from '../config';

type ArgsType = {
  method: Method;
  uri: string;
  body?: Record<string, unknown>;
  params?: Record<string, unknown>;
  url?: string;
};

const apiRequest = (args: ArgsType): AxiosPromise => {
  const { method, body, params, uri, url } = args;
  const baseUrl = url || API_URL;
  let config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
    url: baseUrl + uri,
    method,
    params: {
      apikey: API_URL_KEY,
    },
  };

  if (body) {
    config = { ...config, data: body };
  }
  if (params) {
    config = { ...config, params: { ...config.params, ...params } };
  }
  return axios(config);
};

export default apiRequest;
