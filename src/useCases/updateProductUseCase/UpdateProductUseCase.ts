import { UpdateProductUseCaseDTO } from "../../dtos/UpdateProductUseCaseDTO";
import { ProductRepository } from "../../repositories/ProductRepository";



export class UpdateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) { }

  async execute({ id, name, description, price }: UpdateProductUseCaseDTO): Promise<void> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new Error('Produto não encontrado!');
    }
    await this.productRepository.update(id, { name, description, price });

  }
}