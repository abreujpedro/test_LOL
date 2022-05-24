import CustomError from "../../../../util/error/CustomError";
import IDDDRepository from "../../repositories/IDDDRepository";

interface IRequestGetPrices {
  dddOrigin: number;
  dddToCall: number;
  minutes: number;
  planMinutes: number;
}

export default class GetPricesUseCase {
  repository: IDDDRepository;
  constructor(repository: IDDDRepository) {
    this.repository = repository;
  }

  async execute({
    dddOrigin,
    dddToCall,
    minutes,
    planMinutes,
  }: IRequestGetPrices) {
    if (!dddOrigin) {
      throw new CustomError("ddd origin incorrect", 400);
    } else if (!dddToCall) {
      throw new CustomError("ddd to call incorrect", 400);
    } else if (!minutes) {
      throw new CustomError("minute(s) incorrect", 400);
    }

    try {
      const normalPrice = await this.repository.getPriceByDDD(
        dddOrigin,
        dddToCall
      );
      if (minutes > planMinutes) {
        const pricePlan = normalPrice + normalPrice / 10;
        return { normalPrice, pricePlan };
      }

      return { normalPrice, pricePlan: 0 };
    } catch (error: any) {
      throw error;
    }
  }
}
