import { MovieShowtime } from './movie-showtime.model';

export interface Theatre extends TheatreUpdate{
    id: number
}

export interface TheatreUpdate {
    name: string;
    telephone: string;
    address: string;
    city: string;
    state: string;
    zipCode: number;
    movieShowtime: MovieShowtime[];
}