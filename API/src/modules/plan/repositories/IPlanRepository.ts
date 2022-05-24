import { Model } from "sequelize/types";

export default interface IPlanRepository {
  getAllPlans: () => Promise<Model<any, any>[]>;
}
