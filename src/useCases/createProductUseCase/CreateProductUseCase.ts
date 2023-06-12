import { CreateProductUseCaseDTO } from '../../dtos/CreateProductUseCaseDTO';
import { ProductRepository } from '../../repositories/ProductRepository';

export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) { }

  async execute({ name, description, price }: CreateProductUseCaseDTO) {
    if (!name) {
      throw new Error("Name is required");
    }

    if (!description) {
      throw new Error("Description is required");
    }

    if (!price) {
      throw new Error("Price is required");
    }

    const product = await this.productRepository.create({ name, description, price });

    return product;
  }
}

