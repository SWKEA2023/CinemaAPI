import { Module } from '@nestjs/common';
import { ScreeningsService } from '../../Service/screenings.service';
import { ScreeningsController } from '../../../Interface/Controllers/screenings.controller';

@Module({
  controllers: [ScreeningsController],
  providers: [ScreeningsService],
})
export class ScreeningsModule {}
