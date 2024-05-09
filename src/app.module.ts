import { Module } from '@nestjs/common';
import { AppController } from './Interface/Controllers/app.controller';
import { AppService } from './Domain/Service/app.service';
import { ConfigModule } from '@nestjs/config';
import { SearchModule } from './Application/Search/search.module';
import { OrderModule } from './Application/Order/order.module';

@Module({
  imports: [ConfigModule.forRoot(), SearchModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
