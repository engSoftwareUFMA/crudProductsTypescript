import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { ProductRepository } from '../../repositories/ProductRepository';
import { ListProductsUseCase } from './ListProductsUseCase';



describe("ListProductUseCase", () => {
  let listProductsUseCase: ListProductsUseCase;
  let productRepository: ProductRepository;

  beforeEach(() => {
    productRepository = new ProductRepository();
    listProductsUseCase = new ListProductsUseCase(productRepository);

    productRepository.deleteAll()
  });
  it("should be able to list all products", async () => {
    // Prepare test data
    const product1 = { name: "Product 1", description: "Description 1", price: 100 };
    const product2 = { name: "Product 2", description: "Description 2", price: 200 };
    await productRepository.create(product1);
    await productRepository.create(product2);

    // Execute the use case
    const products = await listProductsUseCase.execute();

    // Assert the result
    expect(products).toHaveLength(2)
    expect(products[0]).toMatchObject(product1)
    expect(products[1]).toMatchObject(product2)
  });

  afterEach(() => {
    productRepository.deleteAll()
  });
})
