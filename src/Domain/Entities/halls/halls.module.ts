import { Module } from '@nestjs/common';
import { HallsService } from '../../Service/halls.service';
import { HallsController } from '../../../Interface/Controllers/halls.controller';

@Module({
  controllers: [HallsController],
  providers: [HallsService],
})
export class HallsModule {}
