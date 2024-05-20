import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert([
    {
      id: '7f8c9d8e-9f0a-1b2c-3d4e-5f6g7h8i9j0k',
      name: 'Product 1',
      description: 'description 1',
      price: 100,
      image_url: 'http://localhost:9000/products/1.png'
    },
    {
      id: '668c9d12-9f0a-1b2c-3d4e-5f6g7h8i19d7',
      name: 'Product 2',
      description: 'description 2',
      price: 200,
      image_url: 'http://localhost:9000/products/2.png'
    },
    {
      id: '668c9d12-81hd-1b2c-3d4e-a82hh8i19d7',
      name: 'Product 3',
      description: 'description 3',
      price: 150,
      image_url: 'http://localhost:9000/products/3.png'
    }
  ]);

  await app.close();
}

bootstrap();
