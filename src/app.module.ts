import { Module } from '@nestjs/common';
import { AppController } from './Interface/Controllers/app.controller';
import { AppService } from './Domain/Service/app.service';
import { ConfigModule } from '@nestjs/config';
import { ScreeningModule } from './Application/Screening/screening.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { ScreeningsModule } from './screenings/screenings.module';
import { MoviesModule } from './movies/movies.module';
import { HallsModule } from './halls/halls.module';
import { SeatsModule } from './seats/seats.module';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [ConfigModule.forRoot(), ScreeningModule, CustomersModule, OrdersModule, ProductsModule, ScreeningsModule, MoviesModule, HallsModule, SeatsModule, TicketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
