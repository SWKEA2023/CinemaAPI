import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SeatsService } from '../../Domain/Service/seats.service';
import { CreateSeatDto } from '../../Domain/Entities/seats/dto/create-seat.dto';
import { UpdateSeatDto } from '../../Domain/Entities/seats/dto/update-seat.dto';

@Controller()
export class SeatsController {
  constructor(private readonly seatsService: SeatsService) {}

  @MessagePattern('createSeat')
  create(@Payload() createSeatDto: CreateSeatDto) {
    return this.seatsService.create(createSeatDto);
  }

  @MessagePattern('findAllSeats')
  findAll() {
    return this.seatsService.findAll();
  }

  @MessagePattern('findOneSeat')
  findOne(@Payload() id: number) {
    return this.seatsService.findOne(id);
  }

  @MessagePattern('updateSeat')
  update(@Payload() updateSeatDto: UpdateSeatDto) {
    return this.seatsService.update(updateSeatDto.id, updateSeatDto);
  }

  @MessagePattern('removeSeat')
  remove(@Payload() id: number) {
    return this.seatsService.remove(id);
  }
}
