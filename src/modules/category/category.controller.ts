import { Response,Request } from "express";
import { CategoryService } from "./category.service";
import { CreateCategoryDto, UpdateCategoryDto } from "./dto";

export class CategoryController{
    constructor(private categoryService: CategoryService){}
    
    async getAll(req:Request,res:Response){
        const categories = await this.categoryService.getAll()
        res.send(categories)
    }

    async getById(req:Request, res:Response){
        const {id} = req.params
        const response = await this.categoryService.getById(id)
        res.send(response)
    }
    
    async create(req:Request,res:Response){
        const createData:CreateCategoryDto = req.body
        const response = await this.categoryService.create(createData)
        res.send(response)
    }

    async delete(req:Request, res:Response){
        const { id } = req.params
        const response = await this.categoryService.remove(id)
        res.send(response)
    }

    async update(req:Request, res:Response){
        const {id} = req.params
        const updateData:UpdateCategoryDto = req.body
        const response = await this.categoryService.update(updateData,id)
        res.send(response)
    }
}