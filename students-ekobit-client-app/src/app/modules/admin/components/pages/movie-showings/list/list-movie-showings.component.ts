import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { firstValueFrom } from 'rxjs';
import { MovieShowtime } from 'src/app/core/models/movie-showtime.model';
import { Movie } from 'src/app/core/models/movie.model';
import { MovieShowtimeService } from 'src/app/core/services/movie-showtime.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { EditMovieShowtimeComponent } from '../edit/edit/edit-movie-showtime.component';

@Component({
  selector: 'es-list-movie-showings',
  templateUrl: './list-movie-showings.component.html',
  styleUrls: ['./list-movie-showings.component.scss']
})
export class ListMovieShowingsComponent implements OnInit {
  movieShowings: MovieShowtime[] = [];

  dataSource = new MatTableDataSource<MovieShowtime>();
  columns = ['id'];

  constructor(
    private service: MovieShowtimeService,
    private utils: UtilsService
    ) {}

  async ngOnInit(): Promise<void> {
    await this.update();
  }

  async add(): Promise<void> {
    const modal = this.utils.openDialog(EditMovieShowtimeComponent, null, true);
    const result = await firstValueFrom(modal.afterClosed());
    if (result === true) {
      this.utils.openSnackBar('Movie showtime added successfully', 5000);
      await this.update();
    }
  }

  async edit(item: MovieShowtime): Promise<void> {
    if (item) {
      const modal = this.utils.openDialog(EditMovieShowtimeComponent, item);
      const result = await firstValueFrom(modal.afterClosed());
      if (result === true) {
        this.utils.openSnackBar('Movie showtime edited successfully', 5000);
        await this.update();
      }
    }
  }

  async delete(id: number): Promise<void> {
    if (id) {
      await firstValueFrom(this.service.delete(id));
      this.utils.openSnackBar('Movie showtime deleted successfully', 5000);
      await this.update();
    }
  }

  private async update() {
    this.movieShowings = await firstValueFrom(this.service.getAll());
    this.dataSource = new MatTableDataSource(this.movieShowings);
  }
}