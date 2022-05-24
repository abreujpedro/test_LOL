import IPlanRepository from "../../repositories/IPlanRepository";

export default class GetAllPlansUseCase {
  repository: IPlanRepository;
  constructor(repository: IPlanRepository) {
    this.repository = repository;
  }

  async execute() {
    try {
      const allPlans = await this.repository.getAllPlans();

      return allPlans;
    } catch (error: any) {
      throw error;
    }
  }
}
