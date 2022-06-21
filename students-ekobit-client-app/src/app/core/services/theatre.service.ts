import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Theatre } from '../models/theatre.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TheatreService {
    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Theatre[]> {
        return this.http.get<Theatre[]>(`${environment.apiUrl}/Theatre`);
    }

    get(id: number): Observable<Theatre> {
        return this.http.get<Theatre>(`${environment.apiUrl}/Theatre/${id}`);
    }

    create(data: Theatre): Observable<Theatre> {
        return this.http.post<Theatre>(`${environment.apiUrl}/Theatre`, data);
    }

    update(data: Theatre): Observable<Theatre> {
        return this.http.put<Theatre>(`${environment.apiUrl}/Theatre/${data.id}`, data);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/Theatre/${id}`);
    }
}