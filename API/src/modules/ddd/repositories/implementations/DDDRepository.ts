import Price from "../../model/DDDModel";
import IPriceRepository from "../IDDDRepository";

export default class DDDRepository implements IPriceRepository {
  async getAllDDD() {
    const allDDD = await Price.findAll();
    return allDDD;
  }
  async getPriceByDDD(dddOrigin: number, dddTocall: number) {
    const dddColumn = await Price.findOne({
      where: { ddd_origin: dddOrigin, ddd_tocall: dddTocall },
    });
    return dddColumn?.getDataValue("price_per_minute");
  }
}
