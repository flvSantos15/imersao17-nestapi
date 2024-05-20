export class CreateOrderDto {
  items: OrderItemDto[];
  card_hash: string;
}

export class OrderItemDto {
  quantity: number;
  product_id: string;
}
