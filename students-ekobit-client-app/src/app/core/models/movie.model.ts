import { MovieShowtime } from "./movie-showtime.model";

export interface Movie {
  id: number;
  title: string;
  duration: number;
  country: string;
  rating: number;
  movieShowtime: MovieShowtime[];
}