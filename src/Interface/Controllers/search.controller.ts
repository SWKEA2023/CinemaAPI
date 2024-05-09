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

  @Get('')
  @ApiOperation({ summary: 'Get all screenings' })
  @ApiResponse({
    status: 200,
    description: 'Get all screenings',
  })
  async getScreenings() {
    return this.searchService.getScreenings();
  }

  @Get(':search')
  @ApiOperation({ summary: 'Get value/values by search' })
  @ApiResponse({
    status: 200,
    description: 'Searches all docs by search value',
  })
  async search(@Param('search') search: string) {
    return this.searchService.getSearch(search);
  }

  @Get('movies')
  @ApiOperation({ summary: 'Get all movies' })
  @ApiResponse({
    status: 200,
    description: 'Get all movies',
  })
  async getMovies() {
    return this.searchService.getMovies();
  }

  @Get('halls')
  @ApiOperation({ summary: 'Get all halls' })
  @ApiResponse({
    status: 200,
    description: 'Get all halls',
  })
  async getHalls() {
    return this.searchService.getHalls();
  }
}
