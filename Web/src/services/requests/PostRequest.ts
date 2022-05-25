import { HttpClient } from "../api/HttpClient";

export abstract class PostRequest {
  static async login(email: string, password: string) {
    try {
      const response = await HttpClient.post({
        url: `/login`,
        body: { email, password },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async register({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    try {
      const response = await HttpClient.post({
        url: `/register`,
        body: { email, password, name },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
