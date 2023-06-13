import { Product } from '@prisma/client'
import { CreateProductUseCaseDTO } from '../dtos/CreateProductUseCaseDTO'


export interface IProductRepository {
  create({ name, description, price }: CreateProductUseCaseDTO): Promise<Product>

  list(): Promise<Product[]>

  deleteAll(): Promise<void>

  findById(id: string): Promise<Product | null>

  update(id: string, { name, description, price }: CreateProductUseCaseDTO): Promise<void>

  delete(id: string): Promise<void>
}
