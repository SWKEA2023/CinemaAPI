import { Order } from 'src/Domain/Entities/order.entity';

export class CreateOrderCommand {
  constructor(public readonly order: Order) {}
}
