import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  constructor(private readonly createProductUseCase: CreateProductUseCase) { }
  async handle(request: Request, response: Response) {
    try {
      const { name, description, price } = request.body

      await this.createProductUseCase.execute({ name, description, price })

      response.status(201).json({ message: "Produto criado com sucesso!" })

    } catch (error) {
      response.status(500).json({ error: "Não foi possivel criar um produto!" })
    }
  }
}

