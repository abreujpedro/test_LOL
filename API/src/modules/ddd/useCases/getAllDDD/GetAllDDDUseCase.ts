import IDDDRepository from "../../repositories/IDDDRepository";

export default class GetAllDDDUseCase {
  repository: IDDDRepository;
  constructor(repository: IDDDRepository) {
    this.repository = repository;
  }

  async execute() {
    try {
      const allDD = await this.repository.getAllDDD();

      return allDD;
    } catch (error: any) {
      throw error;
    }
  }
}
