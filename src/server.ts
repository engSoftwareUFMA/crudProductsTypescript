import express from 'express';
import { ProductRepository } from './repositories/ProductRepository';
import { CreateProductController } from './useCases/createProductUseCase/CreateProductController';
import { CreateProductUseCase } from './useCases/createProductUseCase/CreateProductUseCase';
import { ListProductsUseCase } from './useCases/ListProductsUseCase/ListProductsUseCase';
import { ListProductsController } from './useCases/ListProductsUseCase/ListProductsController';

const app = express();

app.use(express.json());

app.post('/products', (request, response) => {
  const productRepository = new ProductRepository();
  const createProductUseCase = new CreateProductUseCase(productRepository);
  const createProductController = new CreateProductController(createProductUseCase);
  createProductController.handle(request, response);
});

app.get('/products', (request, response) => {
  const productRepository = new ProductRepository();
  const listProductsUseCase = new ListProductsUseCase(productRepository);
  const listProductsController = new ListProductsController(listProductsUseCase);
  listProductsController.handle(request, response);
});

app.listen(8091, () => console.log('Server rodando na porta 8091!'));