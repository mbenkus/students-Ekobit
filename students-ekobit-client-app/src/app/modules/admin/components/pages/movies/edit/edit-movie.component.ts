import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { MovieService } from 'src/app/core/services/movie.service';


@Component({
  selector: 'es-edit-theatre',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  model!: Movie;

  constructor(
    private service: MovieService,
    private dialog: MatDialogRef<EditMovieComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Movie
    ) { }

  ngOnInit() {
    this.init();
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
    if (!this.model.title) {
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
}
