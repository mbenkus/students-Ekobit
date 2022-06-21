import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieShowtime } from '../models/movie-showtime.model';

@Injectable({
    providedIn: 'root'
})
export class MovieShowtimeService {
    constructor(private http: HttpClient) {
    }

    getAll(): Observable<MovieShowtime[]> {
        return this.http.get<MovieShowtime[]>(`${environment.apiUrl}/MovieShowtime`);
    }

    get(id: number): Observable<MovieShowtime> {
        return this.http.get<MovieShowtime>(`${environment.apiUrl}/MovieShowtime/${id}`);
    }

    create(data: MovieShowtime): Observable<MovieShowtime> {
        return this.http.post<MovieShowtime>(`${environment.apiUrl}/MovieShowtime`, data);
    }

    update(data: MovieShowtime): Observable<MovieShowtime> {
        return this.http.put<MovieShowtime>(`${environment.apiUrl}/MovieShowtime/${data.id}`, data);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/MovieShowtime/${id}`);
    }
}