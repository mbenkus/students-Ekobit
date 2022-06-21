import { Movie } from './movie.model';
import { Theatre } from './theatre.model';

export interface MovieShowtime {
    id: number;
    theatreId: number;
    movieId: number;
    auditorium: string;
    startTime: Date;
    theatre: Theatre;
    movie: Movie;
}