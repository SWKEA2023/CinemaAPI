import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { HallsService } from '../../Domain/Service/halls.service';
import { CreateHallDto } from '../../Domain/Entities/halls/dto/create-hall.dto';
import { UpdateHallDto } from '../../Domain/Entities/halls/dto/update-hall.dto';

@Controller()
export class HallsController {
  constructor(private readonly hallsService: HallsService) {}

  @MessagePattern('createHall')
  create(@Payload() createHallDto: CreateHallDto) {
    return this.hallsService.create(createHallDto);
  }

  @MessagePattern('findAllHalls')
  findAll() {
    return this.hallsService.findAll();
  }

  @MessagePattern('findOneHall')
  findOne(@Payload() id: number) {
    return this.hallsService.findOne(id);
  }

  @MessagePattern('updateHall')
  update(@Payload() updateHallDto: UpdateHallDto) {
    return this.hallsService.update(updateHallDto.id, updateHallDto);
  }

  @MessagePattern('removeHall')
  remove(@Payload() id: number) {
    return this.hallsService.remove(id);
  }
}
