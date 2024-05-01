import { Module } from '@nestjs/common';
import { CustomersService } from '../../Service/customers.service';
import { CustomersController } from '../../../Interface/Controllers/customers.controller';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
