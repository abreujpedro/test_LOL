import { HttpClient } from "../api/HttpClient";

export abstract class GetRequest {
  static async getPrice(dddOrigin: string, dddToCall: string, token: string) {
    try {
      const plans = await HttpClient.get({
        url: `/price?dddOrigin=${dddOrigin}&dddToCall=${dddToCall}`,
        authenticated: true,
        token,
      });
      return plans;
    } catch (error) {
      console.log(error);
    }
  }
}
