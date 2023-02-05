import { getRepository , DataSource} from "typeorm"
import { TypeOrmDataSource } from "../../config";

import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";
import { CategoryRepository } from "./category.repository";
import { Category } from "./category.entity";



const dataSource = TypeOrmDataSource.getRepository(Category)

const categoryRepository = new CategoryRepository(dataSource)


const categoryService = new CategoryService(categoryRepository);
console.log(categoryService);


export const categorycontroller = new CategoryController(categoryService)

