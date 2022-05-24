import Plans from "../../model/PlanModel";
import IPlanRepository from "../IPlanRepository";

export default class PlanRepository implements IPlanRepository {
  async getAllPlans() {
    const plans = await Plans.findAll();
    return plans;
  }
}
