import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/entities/order.entity';
import { OrderItem } from './orders/entities/order-item.entity';
import { Product } from './products/entities/product.entity';
import { AuthModule } from './auth/auth.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: 'root',
      database: 'nest',
      entities: [Product, Order, OrderItem],
      synchronize: true,
      logging: true
    }),
    ProductsModule,
    OrdersModule,
    AuthModule,
    RabbitmqModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
