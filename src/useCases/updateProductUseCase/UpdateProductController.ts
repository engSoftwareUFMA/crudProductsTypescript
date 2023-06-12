import { Request, Response } from "express";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
  constructor(private readonly updateProductUseCase: UpdateProductUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description, price } = request.body;

    await this.updateProductUseCase.execute({
      id,
      name,
      description,
      price
    });

    return response.status(200).send('Produto atualizado com sucesso!')
  }

}