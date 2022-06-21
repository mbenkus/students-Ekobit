import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { firstValueFrom } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { MovieService } from 'src/app/core/services/movie.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { EditMovieComponent } from '../edit/edit-movie.component';

@Component({
  selector: 'es-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  movies: Movie[] = [];

  dataSource = new MatTableDataSource<Movie>();
  columns = ['id'];

  constructor(
    private service: MovieService,
    private utils: UtilsService
    ) {}

  async ngOnInit(): Promise<void> {
    await this.update();
  }

  async add(): Promise<void> {
    const modal = this.utils.openDialog(EditMovieComponent, null, true);
    const result = await firstValueFrom(modal.afterClosed());
    if (result === true) {
      this.utils.openSnackBar('Movie added successfully', 5000);
      await this.update();
    }
  }

  async edit(item: Movie): Promise<void> {
    if (item) {
      const modal = this.utils.openDialog(EditMovieComponent, item);
      const result = await firstValueFrom(modal.afterClosed());
      if (result === true) {
        this.utils.openSnackBar('Movie edited successfully', 5000);
        await this.update();
      }
    }
  }

  async delete(id: number): Promise<void> {
    if (id) {
      await firstValueFrom(this.service.delete(id));
      this.utils.openSnackBar('Movie deleted successfully', 5000);
      await this.update();
    }
  }

  private async update() {
    this.movies = await firstValueFrom(this.service.getAll());
    this.dataSource = new MatTableDataSource(this.movies);
  }
}