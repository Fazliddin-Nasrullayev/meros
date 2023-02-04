import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('category')
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column('text')
    title: string;
}