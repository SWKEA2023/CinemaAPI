import { Controller, Get, Param } from '@nestjs/common';
import { ScreeningService } from '../../Domain/Service/screening.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
@ApiBearerAuth()
@ApiTags('Screening')
@Controller('screening')
export class ScreeningController {
  constructor(private readonly searchService: ScreeningService) {}

  @Get(':search')
  @ApiOperation({ summary: 'Get all by search' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
  })
  async searchAll(@Param('search') search: string) {
    return this.searchService.getSearch(search);
  }

  //VIRKER IKKE -> Den kalder på search....
  @Get('/all/:index')
  @ApiOperation({ summary: 'Get all by index' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
  })
  async getAll(@Param('index') index: string) {
    return this.searchService.getAll(index);
  }

  //Ny navngivning til search..
  //Implementer resten af endpoints her. 
  //getScreening
  //getScreenings
  //getMovies

}
