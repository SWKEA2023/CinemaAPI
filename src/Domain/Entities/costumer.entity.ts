import { ApiProperty } from '@nestjs/swagger';

export class Customer {
  @ApiProperty({ description: 'Customer ID' })
  public customerId: number;

  @ApiProperty({ description: 'First name of the customer' })
  public firstName: string;

  @ApiProperty({ description: 'Last name of the customer' })
  public lastName: string;

  @ApiProperty({ description: 'Email address of the customer' })
  public email: string;

  @ApiProperty({ description: 'Phone number of the customer' })
  public phoneNumber: string;

  constructor(
    customerId: number,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
  ) {
    this.customerId = customerId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
