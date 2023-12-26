import { Repository } from "typeorm";
import { Province } from "../entity/province";
import { AppDataSource } from "../data-source";

export default new (class ProvinceServices {
  private readonly ProvinceRepository: Repository<Province> =
    AppDataSource.getRepository(Province);
  async create(data: any): Promise<object | string> {
    try {
      const response = await this.ProvinceRepository.save(data);

      return {
        message: "success creating a new province",
        data: response,
      };
    } catch (error) {
      return "message: something error while creating province";
    }
  }
  async update(id: number, data: any): Promise<object | string> {
    try {
      const response = await this.ProvinceRepository.update(id, data);
      return {
        message: "success updating a province",
        data: response,
      };
    } catch (error) {
      console.error("Error updating province:", error);
      return {
        message: "something error while updating province",
        error: error.message,
      };
    }
  }

  async delete(id: number): Promise<object | string> {
    try {
      const response = await this.ProvinceRepository.delete(id);
      return {
        message: "success deleting a province",
        data: response,
      };
    } catch (error) {
      return "message: something error while deleting province";
    }
  }

  async findAll(): Promise<object | string> {
    try {
      const response = await this.ProvinceRepository.find();
      return {
        message: "success get all province",
        data: response,
      };
    } catch (error) {
      return "message: something error while get all province";
    }
  }
  async findOne(id: number): Promise<object | string> {
    try {
      const response = await await this.ProvinceRepository.find({
        where: { id: id },
      });

      return {
        message: "success get the province",
        data: response,
      };
    } catch (error) {
      return "message: something error while get the province";
    }
  }
})();
