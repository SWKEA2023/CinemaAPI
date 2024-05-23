import { GetAllHandler } from './get-all.handler';
import { GetHallsHandler } from './get-halls.handler';
import { GetMoviesHandler } from './get-movies.handler';
import { GetScreeningsHandler } from './get-screenings.handler';
import { GetSearchHandler } from './get-search.handler';

/**
 * Export all query handlers for search
 */
export const QueryHandlers = [
  GetSearchHandler,
  GetMoviesHandler,
  GetAllHandler,
  GetHallsHandler,
  GetScreeningsHandler,
];
