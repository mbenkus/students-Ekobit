import { MovieShowtime } from './movie-showtime.model';

export interface Theatre {
    id: number;
    name: string;
    telephone: string;
    address: string;
    city: string;
    state: string;
    zipCode: number;
    movieShowtime: MovieShowtime[];
}