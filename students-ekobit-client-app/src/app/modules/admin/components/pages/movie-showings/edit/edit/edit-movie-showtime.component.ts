import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { first, firstValueFrom } from 'rxjs';
import { MovieShowtime } from 'src/app/core/models/movie-showtime.model';
import { Movie } from 'src/app/core/models/movie.model';
import { MovieShowtimeService } from 'src/app/core/services/movie-showtime.service';
import { MovieService } from 'src/app/core/services/movie.service';
import { TheatreService } from 'src/app/core/services/theatre.service';

export interface SelectItem {
  id: number;
  name: string;
}

@Component({
  selector: 'es-edit-movie-showtime',
  templateUrl: './edit-movie-showtime.component.html',
  styleUrls: ['./edit-movie-showtime.component.scss']
})
export class EditMovieShowtimeComponent implements OnInit {

  model!: MovieShowtime;
  movies: SelectItem[] = [];
  theatres: SelectItem[] = [];

  constructor(
    private service: MovieShowtimeService,
    private movieService: MovieService,
    private theatreService: TheatreService,
    private dialog: MatDialogRef<EditMovieShowtimeComponent>,
    @Inject(MAT_DIALOG_DATA) private data: MovieShowtime
    ) { }

  async ngOnInit() {
    this.init();
    await this.loadRelatedData();
  }

  cancel(): void {
    this.close(false);
  }

  async save(): Promise<void> {
    if (this.validateModel()) {
      if (this.model.id) {
        await firstValueFrom(this.service.update(this.model));
      } else {
        await firstValueFrom(this.service.create(this.model));
      }

      this.close(true);
    }
  }

  validateModel() {
    if (!this.model.theatreId && !this.model.movieId) {
      return false;
    }

    return true;
  }

  private close(success: boolean): void {
    this.dialog.close(success);
  }

  private init() {
    this.model = this.data || {};
  }

  async loadRelatedData() {
    const movies = await firstValueFrom(this.movieService.getAll())
    this.movies = movies.map(item => {
      return {
        id: item.id,
        name: item.title
      } as SelectItem
    });

    this.theatres = await firstValueFrom(this.theatreService.getAll());
  }
}
