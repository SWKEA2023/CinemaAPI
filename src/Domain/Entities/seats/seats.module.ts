import { Module } from '@nestjs/common';
import { SeatsService } from '../../Service/seats.service';
import { SeatsController } from '../../../Interface/Controllers/seats.controller';

@Module({
  controllers: [SeatsController],
  providers: [SeatsService],
})
export class SeatsModule {}
