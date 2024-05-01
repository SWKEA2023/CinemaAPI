import { Module } from '@nestjs/common';
import { ProductsService } from '../../Service/products.service';
import { ProductsController } from '../../../Interface/Controllers/products.controller';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
