import { Product } from '../models/product'

export interface IProductRepository {
  create(name: string, description: string, price: number): Promise<void>

  list(): Promise<Product[]>

}