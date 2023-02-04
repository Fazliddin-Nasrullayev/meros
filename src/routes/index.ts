import { Router } from "express";
import { categorycontroller } from "../modules/category";

const router = Router();

router
.get('/category',categorycontroller.getAll)
.get('/category/:id', categorycontroller.getById)
.post('/category', categorycontroller.create)
.put('/category/:id', categorycontroller.update)
.delete('/category/:id', categorycontroller.delete)

export default router