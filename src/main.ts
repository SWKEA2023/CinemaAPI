import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

/**
 * This setup up swagger for the application
 * @param {INestApplication} app
 */
function setupSwagger(app: INestApplication): void {
  const documentBuilder = new DocumentBuilder()
    .setTitle('Cinema API')
    .setDescription('This is a client API for Cinema service')
    .setVersion('1.0')
    .addBasicAuth()
    .build();
  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });
}

/**
 * This is the main function that bootstraps the application
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [configService.get('RMQ_URL') as string],
      queue: configService.get('RMQ_QUEUE'),
      queueOptions: {
        durable: true,
      },
    },
  });

  setupSwagger(app);
  await app.listen(configService.get('APP_PORT'));
}

bootstrap();
