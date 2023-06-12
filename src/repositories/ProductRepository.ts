import { Product } from '@prisma/client';
import { prisma } from '../../prisma/client';
import { CreateProductUseCaseDTO } from '../dtos/CreateProductUseCaseDTO';

import { IProductRepository } from './IProductRepository';



export class ProductRepository implements IProductRepository {
  async create({ name, description, price }: CreateProductUseCaseDTO): Promise<Product> {
    const product = await prisma.product.create({ data: { name, description, price } })

    return product
  }
  async list(): Promise<Product[]> {
    const products = await prisma.product.findMany()
    return products
  }

  async findById(id: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({ where: { id } })
    return product
  }

  async update(id: string, { name, description, price }: CreateProductUseCaseDTO): Promise<void> {
    await prisma.product.update({ where: { id }, data: { name, description, price } })
  }

  async deleteAll(): Promise<void> {
    await prisma.product.deleteMany()
  }


}