import { Model } from "sequelize/types";

export default interface IDDDRepository {
  getAllDDD: () => Promise<Model<any, any>[]>;
  getPriceByDDD: (dddOrigin: number, dddTocall: number) => any;
}
