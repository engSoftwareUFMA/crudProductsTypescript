import { describe, expect, test } from 'vitest'
import { ProductRepository } from '../../repositories/ProductRepository'
import { CreateProductUseCase } from './CreateProductUseCase'


describe("Create Product Use Case", () => {
  test("Should be able to create a new product", () => {
    const productRepository = new ProductRepository();
    const createProductUseCase = new CreateProductUseCase(productRepository);

    const productData = { name: "Product Name", description: "Product Description", price: 1000 };

    const createdProduct = createProductUseCase.execute(productData);

    expect(createdProduct).toBeDefined();
    expect(createdProduct.name).toBe(productData.name);
    expect(createdProduct.description).toBe(productData.description);
    expect(createdProduct.price).toBe(productData.price);

  })
}
)

