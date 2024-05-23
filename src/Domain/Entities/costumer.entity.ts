import { ApiProperty } from '@nestjs/swagger';

export class Customer {
  @ApiProperty({ description: 'First name of the customer' })
  public firstName: string;

  @ApiProperty({ description: 'Last name of the customer' })
  public lastName: string;

  @ApiProperty({ description: 'Email address of the customer' })
  public email: string;

  @ApiProperty({ description: 'Phone number of the customer' })
  public phoneNumber: string;

  /** @constructor 
   * @param firstName
   * @param lastName
   * @param email
   * @param phoneNumber
  */
  constructor(
    /** @private */
    firstName: string,
    /** @private */
    lastName: string,
    /** @private */
    email: string,
    /** @private */
    phoneNumber: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
