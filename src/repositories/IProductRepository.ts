import { Product } from '@prisma/client'
import { CreateProductUseCaseDTO } from '../dtos/CreateProductUseDTO'


export interface IProductRepository {
  create({ name, description, price }: CreateProductUseCaseDTO): Promise<void>

  list(): Promise<Product[]>
}

