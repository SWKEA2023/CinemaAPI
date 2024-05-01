import { Module } from '@nestjs/common';
import { TicketsService } from '../../Service/tickets.service';
import { TicketsController } from '../../../Interface/Controllers/tickets.controller';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
