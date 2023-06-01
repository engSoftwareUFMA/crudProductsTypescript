import { Product } from '@prisma/client';
import { prisma } from '../../prisma/client';
import { CreateProductUseCaseDTO } from '../dtos/CreateProductUseDTO';

import { IProductRepository } from './IProductRepository';



export class ProductRepository implements IProductRepository{
  async create({ name, description, price }: CreateProductUseCaseDTO): Promise<void> {
    await prisma.product.create({ data: { name, description, price } })
  }

  async list(): Promise<Product[]> {
    const products = await prisma.product.findMany()
    return products
  }

}