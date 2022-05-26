import { AxiosResponse } from "axios";
import { api } from "./api";

export abstract class HttpClient {
  static async get({
    url,
    authenticated,
    token,
  }: {
    url: any;
    authenticated?: boolean;
    token?: string;
  }) {
    if (authenticated && token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
    }
    const response = await api.request(url);
    return response.data;
  }

  static async post({
    url,
    authenticated,
    token,
    body,
  }: {
    url: any;
    authenticated?: boolean;
    token?: string;
    body?: { [key: string]: any };
  }) {
    if (authenticated && token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
    }
    const response = await api.post(url, body);
    return response;
  }
}
