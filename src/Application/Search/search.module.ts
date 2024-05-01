import { Module } from '@nestjs/common';
import { QueryHandlers } from './Queries/Handlers';
import { CqrsModule } from '@nestjs/cqrs';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SearchController } from 'src/Interface/Controllers/screening.controller';
import { SearchService } from 'src/Domain/Service/search.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    CqrsModule,
    ConfigModule.forRoot(),
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
  ],
  providers: [SearchService, ...QueryHandlers],
  controllers: [SearchController],
})
export class SearchModule {}
