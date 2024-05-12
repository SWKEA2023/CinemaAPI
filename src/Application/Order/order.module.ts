import { Module } from '@nestjs/common';
import { OrderService } from '../../Domain/Service/order.service';
import { OrderController } from '../../Interface/Controllers/order.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './Commands/Handlers';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    CqrsModule,
    ConfigModule,
    ElasticsearchModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        node: configService.get('ELASTIC_HOST'),
        auth: {
          username: configService.get('ELASTIC_USERNAME'),
          password: configService.get('ELASTIC_PASSWORD'),
        },
        tls: {
          rejectUnauthorized: false,
        },
      }),
    }),
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
