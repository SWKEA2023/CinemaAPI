import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ScreeningsService } from './screenings.service';
import { CreateScreeningDto } from './dto/create-screening.dto';
import { UpdateScreeningDto } from './dto/update-screening.dto';

@Controller()
export class ScreeningsController {
  constructor(private readonly screeningsService: ScreeningsService) {}

  @MessagePattern('createScreening')
  create(@Payload() createScreeningDto: CreateScreeningDto) {
    return this.screeningsService.create(createScreeningDto);
  }

  @MessagePattern('findAllScreenings')
  findAll() {
    return this.screeningsService.findAll();
  }

  @MessagePattern('findOneScreening')
  findOne(@Payload() id: number) {
    return this.screeningsService.findOne(id);
  }

  @MessagePattern('updateScreening')
  update(@Payload() updateScreeningDto: UpdateScreeningDto) {
    return this.screeningsService.update(updateScreeningDto.id, updateScreeningDto);
  }

  @MessagePattern('removeScreening')
  remove(@Payload() id: number) {
    return this.screeningsService.remove(id);
  }
}
