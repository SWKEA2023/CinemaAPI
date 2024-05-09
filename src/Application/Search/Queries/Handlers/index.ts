import { GetAllHandler } from './get-all.handler';
import { GetHallsHandler } from './get-halls.handler';
import { GetMoviesHandler } from './get-movies.handler';
import { GetScreeningsHandler } from './get-screenings.handler';
import { GetSearchHandler } from './get-search.handler';

export const QueryHandlers = [
  GetSearchHandler,
  GetMoviesHandler,
  GetAllHandler,
  GetHallsHandler,
  GetScreeningsHandler,
];
