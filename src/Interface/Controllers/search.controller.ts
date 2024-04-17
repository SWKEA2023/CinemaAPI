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
  @ApiOperation({ summary: 'Get movie by search' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
  })
  async getMovie(@Param('search') search: string) {
    return this.searchService.getSearch(search);
  }
}
