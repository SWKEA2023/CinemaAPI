import { Module } from '@nestjs/common';
import { AppController } from './Interface/Controllers/app.controller';
import { AppService } from './Domain/Service/app.service';
import { ConfigModule } from '@nestjs/config';
import { ScreeningModule } from './Application/Screening/screening.module';

@Module({
  imports: [ConfigModule.forRoot(), ScreeningModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
