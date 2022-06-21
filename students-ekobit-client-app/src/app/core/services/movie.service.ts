import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${environment.apiUrl}/Movie`);
    }

    get(id: number): Observable<Movie> {
        return this.http.get<Movie>(`${environment.apiUrl}/Movie/${id}`);
    }

    create(data: Movie): Observable<Movie> {
        return this.http.post<Movie>(`${environment.apiUrl}/Movie`, data);
    }

    update(data: Movie): Observable<Movie> {
        return this.http.put<Movie>(`${environment.apiUrl}/Movie/${data.id}`, data);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/Movie/${id}`);
    }
}