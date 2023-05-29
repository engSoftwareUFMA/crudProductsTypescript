import { describe, expect, test } from 'vitest'


describe("Create Product Use Case", () => {
  test("Should be able to create a new product", () => {
    const createProductParams = {
      name: "any_name",
      description: "any_description",
      price: 10,
      created_at: new Date(),
      updated_at: new Date(),
    }
    const product = new Product(createProductParams)
    expect(product.name).toBe("any_name")
    expect(product.description).toBe("any_description")
    expect(product.price).toBe(10)
  })
}
)

