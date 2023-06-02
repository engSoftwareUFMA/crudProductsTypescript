import { Product } from "@prisma/client";
import { IProductRepository } from "../../repositories/IProductRepository";



export class ListProductsUseCase {
    constructor( private readonly productRepository: IProductRepository){}
    async execute():Promise<Product[]>{
        //injenção de dependencia
        const products = await this.productRepository.list()
        return products
    }
}