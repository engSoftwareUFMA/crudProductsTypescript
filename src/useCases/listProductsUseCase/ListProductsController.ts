import { Request, Response } from "express";
import { ListProductsUseCase } from "./ListProductsUseCase";



// Handle convenção 
export class ListProductsController {
    constructor(private readonly listProductsUseCase: ListProductsUseCase) { }
    async handle(request: Request, response: Response) {
        const products = await this.listProductsUseCase.execute()
        return response.status(201).json(products)
    }

}