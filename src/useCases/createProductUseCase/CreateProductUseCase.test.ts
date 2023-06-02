import { describe, expect, it,beforeEach, afterEach } from 'vitest'
import { ProductRepository } from '../../repositories/ProductRepository'
import { CreateProductUseCase } from './CreateProductUseCase'
import { Product } from '@prisma/client';

describe('CreateProductUseCase', () => {
  let createProductUseCase: CreateProductUseCase;
  let productRepository: ProductRepository;

  beforeEach(() => {
    productRepository = new ProductRepository();
    createProductUseCase = new CreateProductUseCase(productRepository);
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

    it('should throw an error if name is not passed', async () => {
      const createProductUseCaseDTO = {
        name: '',
        description: '10kg de roupas',
        price: 10,
      };
  
      await expect(createProductUseCase.execute(createProductUseCaseDTO)).rejects.toThrow('Name is required');
    })
    it('should throw an error if description is not passed', async () => {
      const createProductUseCaseDTO = {
        name: 'Maquina de lavar',
        description: '',
        price: 10,
      };
  
      await expect(createProductUseCase.execute(createProductUseCaseDTO)).rejects.toThrow('Description is required');
    })
    it('should throw an error if price is not passed', async () => {
      const createProductUseCaseDTO = {
        name: 'Maquina de lavar',
        description: '10kg de roupas',
        price: 0,
      };
  
      await expect(createProductUseCase.execute(createProductUseCaseDTO)).rejects.toThrow('Price is required');
    })
    afterEach(() => {
      productRepository.deleteAll()
    });
  });