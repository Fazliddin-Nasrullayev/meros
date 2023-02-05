// import { SubCategory } from './../subcategory/category.entity';
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";

@Entity('category')
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column('text')
    title: string;

    // @OneToMany(()=>SubCategory, subcategory => subcategory.category)
    // subCategories: SubCategory[];
}