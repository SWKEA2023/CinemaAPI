import { Module } from '@nestjs/common';
import { OrderService } from '../../Domain/Service/order.service';
import { OrderController } from '../../Interface/Controllers/order.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './Commands/Handlers';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    CqrsModule,
    ConfigModule,
    ClientsModule.registerAsync([
      {
        name: 'ORDER_QUEUE',
        imports: [ConfigModule], // Import ConfigModule
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('RMQ_URL')], // Access environment variable using ConfigService
            queue: configService.get<string>('RMQ_QUEUE'), // Access environment variable using ConfigService
            queueOptions: { durable: true },
          },
        }),
        inject: [ConfigService], // Inject ConfigService
      },
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService, ...CommandHandlers],
})
export class OrderModule {}
