import { Controller, Get, Param } from '@nestjs/common';
import { SearchService } from '../../Domain/Service/search.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
@ApiBearerAuth()
@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get(':search')
  @ApiOperation({ summary: 'Get index by search' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
  })
  async searchAll(@Param('search') search: string) {
    return this.searchService.getSearch(search);
  }

  @Get('')
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
