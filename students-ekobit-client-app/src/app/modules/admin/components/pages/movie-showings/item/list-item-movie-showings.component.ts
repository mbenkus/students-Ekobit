import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MovieShowtime } from 'src/app/core/models/movie-showtime.model';

@Component({
  selector: 'es-list-item-movie-showings',
  templateUrl: './list-item-movie-showings.component.html',
  styleUrls: ['./list-item-movie-showings.component.scss']
})
export class ListItemMovieShowingsComponent {

  @Input() element!: MovieShowtime;
  @Output() edited = new EventEmitter<MovieShowtime>();
  @Output() deleted = new EventEmitter<number>();

  edit(element: MovieShowtime) {
    this.edited.emit(element);
  }

  delete(id: number) {
    this.deleted.emit(id);
  }

  getName() {
    return this.element.movie.title.charAt(0) + this.element.movie.title.charAt(1);
  }

}
