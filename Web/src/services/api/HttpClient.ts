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
    return response;
  }
}
