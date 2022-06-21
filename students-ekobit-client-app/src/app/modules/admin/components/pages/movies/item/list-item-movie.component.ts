import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/core/models/movie.model';

@Component({
  selector: 'es-list-item-movie',
  templateUrl: './list-item-movie.component.html',
  styleUrls: ['./list-item-movie.component.scss']
})
export class ListItemMovieComponent {

  constructor(private router: Router) {}

  @Input() element!: Movie;
  @Output() edited = new EventEmitter<Movie>();
  @Output() deleted = new EventEmitter<number>();

  edit(element: Movie) {
    this.edited.emit(element);
  }

  delete(id: number) {
    this.deleted.emit(id);
  }

  getName() {
    return this.element.title.charAt(0) + this.element.title.charAt(1);
  }

  showMovieShowings() {
    return this.router.navigate([`/admin/movie-showings/${this.element.id}`]);
  }
}
