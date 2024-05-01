import { Module } from '@nestjs/common';
import { AppController } from './Interface/Controllers/app.controller';
import { AppService } from './Domain/Service/app.service';
import { ConfigModule } from '@nestjs/config';
import { SearchModule } from './Application/Search/search.module';
import { CustomersModule } from './Domain/Entities/customers/customers.module';
import { HallsModule } from './Domain/Entities/halls/halls.module';
import { MoviesModule } from './Domain/Entities/movies/movies.module';
import { OrdersModule } from './Domain/Entities/orders/orders.module';
import { ProductsModule } from './Domain/Entities/products/products.module';
import { ScreeningsModule } from './Domain/Entities/screenings/screenings.module';
import { SeatsModule } from './Domain/Entities/seats/seats.module';
import { TicketsModule } from './Domain/Entities/tickets/tickets.module';

@Module({
  imports: [ConfigModule.forRoot(), SearchModule, CustomersModule, HallsModule, MoviesModule, OrdersModule, ProductsModule, ScreeningsModule, SeatsModule, TicketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
