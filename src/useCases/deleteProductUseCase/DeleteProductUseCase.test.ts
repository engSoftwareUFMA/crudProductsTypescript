import { afterEach, beforeEach, describe, expect, it, } from 'vitest';
import { ProductRepository } from '../../repositories/ProductRepository';
import { DeleteProductUseCase } from './DeleteProductUseCase';

let productRepository: ProductRepository
let deleteProductUseCase: DeleteProductUseCase

describe('DeleteProductUseCase', () => {
  beforeEach(() => {
    productRepository = new ProductRepository()
    deleteProductUseCase = new DeleteProductUseCase(productRepository)
  })


  it('should return an error message when deletion fails', async () => {
    // Arrange
    const nonExistingProductId = '456'

    // Act and Assert
    await expect(deleteProductUseCase.execute(nonExistingProductId)).rejects.toThrow('Produto não encontrado!')

    afterEach(() => {
      productRepository.deleteAll()
    })
  })
});