import { HttpClient } from "../api/HttpClient";

export abstract class GetRequest {
  static async getPrice({
    dddOrigin,
    dddToCall,
    token,
    price,
  }: {
    dddOrigin: number;
    dddToCall: number;
    token: string | null;
    price: number;
  }) {
    try {
      if (token) {
        const plans = await HttpClient.get({
          url: `/price?dddOrigin=${dddOrigin}&dddToCall=${dddToCall}$pricePlan=${price}`,
          authenticated: true,
          token,
        });
        return plans;
      } else {
        throw new Error("There is no token");
      }
    } catch (error) {
      console.log(error);
    }
  }
}
