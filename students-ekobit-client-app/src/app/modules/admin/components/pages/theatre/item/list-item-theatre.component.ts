import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Theatre } from 'src/app/core/models/theatre.model';

@Component({
  selector: 'es-list-item-theatre',
  templateUrl: './list-item-theatre.component.html',
  styleUrls: ['./list-item-theatre.component.scss']
})
export class ListItemTheatreComponent {

  constructor(private router: Router) {}

  @Input() element!: Theatre;
  @Output() edited = new EventEmitter<Theatre>();
  @Output() deleted = new EventEmitter<number>();

  edit(element: Theatre) {
    this.edited.emit(element);
  }

  delete(id: number) {
    this.deleted.emit(id);
  }

  getName() {
    return this.element.name.charAt(0) + this.element.name.charAt(1);
  }

  showMovieShowings() {
    return this.router.navigate([`/admin/movie-showings/${this.element.id}`]);
  }
}
