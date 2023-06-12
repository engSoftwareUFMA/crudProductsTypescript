import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { UpdateProductUseCaseDTO } from "../../dtos/UpdateProductUseCaseDTO";
import { ProductRepository } from "../../repositories/ProductRepository";
import { UpdateProductUseCase } from "./UpdateProductUseCase";


describe("UpdateProductUseCase", () => {
  let updateProductUseCase: UpdateProductUseCase;
  let productRepository: ProductRepository;

  beforeEach(() => {
    productRepository = new ProductRepository();
    updateProductUseCase = new UpdateProductUseCase(productRepository);
  });


  it("should throw an error when the product does not exist", async () => {
    // Arrange
    const nonExistingProductId = "456";
    const updatedProductData: UpdateProductUseCaseDTO = {
      id: nonExistingProductId,
      name: "New Product Name",
      description: "New Product Description",
      price: 10,
    };

    // Act and Assert
    await expect(updateProductUseCase.execute(updatedProductData)).rejects.toThrow(
      "Produto não encontrado!"
    );

    afterEach(() => {
      productRepository.deleteAll()
    });
  });
});