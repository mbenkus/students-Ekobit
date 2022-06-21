import { Theatre } from './theatre.model';

export interface MovieShowtime {
    id: number;
    theatreId: number;
    auditorium: string;
    startTime: Date;
    theatre: Theatre
}