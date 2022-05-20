import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { HttpClientRequest } from "./requests/http-client-request";
import { HttpClientResponse } from "./responses/http-client-response";

export class HttpClient {
  protected readonly axios: AxiosInstance;

  public constructor(private readonly baseUrl: string) {
    this.axios = axios.create({
      baseURL: this.baseUrl,
    });
  }

  public async request(
    request: HttpClientRequest
  ): Promise<HttpClientResponse> {
    const axiosRequest: AxiosRequestConfig = {
      url: request.path,
      data: request.data,
      params: request.params,
      method: request.method,
      headers: request.headers,
      responseType: request.responseType,
    };

    const response = await this.axios.request(axiosRequest);

    return new HttpClientResponse(response.status, response.data);
  }
}
