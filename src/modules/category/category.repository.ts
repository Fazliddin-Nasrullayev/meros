import { Repository } from "typeorm";
import { Category } from "./category.entity";
import { CreateCategoryDto, UpdateCategoryDto } from "./dto";


export class CategoryRepository{
    constructor(private readonly categoryRepository:Repository<Category>){}

    async getAll(){
    return this.categoryRepository.find()
    }

    async getById(id:string){
    return this.categoryRepository
    .createQueryBuilder()
    .where("id = :id",{id})
    .getOne()
    }

    async create(values:CreateCategoryDto){
      return this.categoryRepository
      .createQueryBuilder()
      .insert()
      .into(Category)
      .values(values as unknown as Category)
      .execute()
    }

    async update(values:UpdateCategoryDto,id:string){
      return this.categoryRepository
      .createQueryBuilder()
      .update()
      .set(values as unknown as Category)
      .where("id = :id",{id})
      .execute()
    }

    async remove(id:string){
      return this.categoryRepository
      .createQueryBuilder()
      .delete()
      .where('id = :id',{id})
      .execute()
    }
}