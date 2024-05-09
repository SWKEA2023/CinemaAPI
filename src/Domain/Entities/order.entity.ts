import { ApiProperty } from '@nestjs/swagger';
import { Customer } from './costumer.entity';
import { Ticket } from './ticket.entity';

export class Order {
  @ApiProperty({ type: Ticket, description: 'Ticket' })
  public ticket: Ticket;

  @ApiProperty({ type: Customer, description: 'Customer' })
  public customer: Customer;

  constructor(ticket: Ticket, customer: Customer) {
    this.ticket = ticket;
    this.customer = customer;
  }
}
