import { InsertResult, UpdateResult, DeleteResult } from "typeorm";
import { Category } from "./category.entity";
import { CategoryRepository } from "./category.repository";


export class CategoryService{
    constructor(private readonly categoryRepository: CategoryRepository){}

    async getAll():Promise<Category[]>{
       const categories = await this.categoryRepository.getAll()
       return categories
    }

    async getById(id:string):Promise<Category>{
       const category = await this.categoryRepository.getById(id)
       return category
    }

    async create(values):Promise<InsertResult>{
      const response = await this.categoryRepository.create(values)
      return response
    }

    async update(values,id:string):Promise<UpdateResult>{
      const response = await this.categoryRepository.update(values,id)
      return response
    }

    async remove(id:string):Promise<DeleteResult>{
      const response = await this.categoryRepository.remove(id)
      return response
    }
}