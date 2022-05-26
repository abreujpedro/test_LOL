import { AxiosResponse } from "axios";
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
    price: number | undefined;
  }) {
    try {
      if (token) {
        const prices = await HttpClient.get({
          url: `/price?dddOrigin=${dddOrigin}&dddToCall=${dddToCall}$planMinutes=${price}`,
          authenticated: true,
          token,
        });
        return prices;
      } else {
        throw new Error("There is no token");
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async getDDDs(token: string | null): Promise<any> {
    try {
      if (token) {
        const ddd = await HttpClient.get({
          url: `/ddd`,
          authenticated: true,
          token,
        });
        return ddd;
      } else {
        throw new Error("There is no token");
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async getPlans(token: string | null) {
    try {
      if (token) {
        const plans = await HttpClient.get({
          url: `/plans`,
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
