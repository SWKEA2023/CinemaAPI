import { ApiProperty } from '@nestjs/swagger';
import { Customer } from './costumer.entity';

export class Order {
  @ApiProperty({ type: Customer, description: 'Customer' })
  public customer: Customer;

  constructor(customer: Customer) {
    this.customer = customer;
  }
}
