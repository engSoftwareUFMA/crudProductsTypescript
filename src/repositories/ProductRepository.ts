import { prisma } from '../../prisma/client';
import { CreateProductUseCaseDTO } from '../dtos/CreateProductUseDTO';
import { Product } from '../models/product';

export interface IProductRepository {
  create({ name, description, price }: CreateProductUseCaseDTO): Promise<void>

  list(): Promise<Product[]>
}


export class ProductRepository {
  async create({ name, description, price }: CreateProductUseCaseDTO): Promise<Product> {
    const product = prisma.product.create({ data: { name, description, price } })
    return product
  }

  async list(): Promise<Product[]> {
    const products = prisma.product.findMany()
    return products
  }

  async findByName(name: string): Promise<Product | null> {
    const product = prisma.product.findFirst({ where: { name } })
    return product
  }

}