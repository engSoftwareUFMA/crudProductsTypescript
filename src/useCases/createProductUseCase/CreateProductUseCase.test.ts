import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { ProductRepository } from '../../repositories/ProductRepository';
import { CreateProductUseCase } from './CreateProductUseCase';

describe('CreateProductUseCase', () => {
  let createProductUseCase: CreateProductUseCase;
  let productRepository: ProductRepository;

  beforeEach(() => {
    productRepository = new ProductRepository();
    createProductUseCase = new CreateProductUseCase(productRepository);

    productRepository.deleteAll()
  });


  it('should create a product if all required fields are provided', async () => {
    const createProductUseCaseDTO = {
      name: 'Test Product',
      description: 'Test description',
      price: 10,
    };

    const createdProduct = await createProductUseCase.execute(createProductUseCaseDTO);

    expect(createdProduct.name).toBe(createProductUseCaseDTO.name);
    expect(createdProduct.description).toBe(createProductUseCaseDTO.description);
    expect(createdProduct.price).toBe(createProductUseCaseDTO.price);
  });
  afterEach(() => {
    productRepository.deleteAll()
  });
});