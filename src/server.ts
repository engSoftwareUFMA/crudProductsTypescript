import express from 'express';
import { ProductRepository } from './repositories/ProductRepository';
import { CreateProductController } from './useCases/createProductUseCase/CreateProductController';
import { CreateProductUseCase } from './useCases/createProductUseCase/CreateProductUseCase';
import { ListProductsController } from './useCases/listProductsUseCase/ListProductsController';
import { ListProductsUseCase } from './useCases/listProductsUseCase/ListProductsUseCase';
import { UpdateProductController } from './useCases/updateProductUseCase/UpdateProductController';
import { UpdateProductUseCase } from './useCases/updateProductUseCase/UpdateProductUseCase';

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

app.put('/products/:id', (request, response) => {
  const productRepository = new ProductRepository();
  const updateProductUseCase = new UpdateProductUseCase(productRepository);
  const updateProductController = new UpdateProductController(updateProductUseCase);
  updateProductController.handle(request, response);
});

app.listen(8091, () => console.log('Server rodando na porta 8091!'));