import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { firstValueFrom } from 'rxjs';
import { Theatre } from 'src/app/core/models/theatre.model';
import { TheatreService } from 'src/app/core/services/theatre.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { EditTheatreComponent } from '../edit/edit-theatre.component';

@Component({
  selector: 'es-list-theatres',
  templateUrl: './list-theatres.component.html',
  styleUrls: ['./list-theatres.component.scss']
})
export class ListTheatresComponent implements OnInit {
  theatres: Theatre[] = [];

  dataSource = new MatTableDataSource<Theatre>();
  columns = ['id'];

  constructor(
    private service: TheatreService,
    private utils: UtilsService
    ) {}

  async ngOnInit(): Promise<void> {
    await this.update();
  }

  async add(): Promise<void> {
    const modal = this.utils.openDialog(EditTheatreComponent, null, true);
    const result = await firstValueFrom(modal.afterClosed());
    if (result === true) {
      this.utils.openSnackBar('Theatre added successfully', 5000);
      await this.update();
    }
  }

  async edit(item: Theatre): Promise<void> {
    if (item) {
      const modal = this.utils.openDialog(EditTheatreComponent, item);
      const result = await firstValueFrom(modal.afterClosed());
      if (result === true) {
        this.utils.openSnackBar('Theatre edited successfully', 5000);
        await this.update();
      }
    }
  }

  async delete(id: number): Promise<void> {
    if (id) {
      await firstValueFrom(this.service.delete(id));
      this.utils.openSnackBar('Theatre deleted successfully', 5000);
      await this.update();
    }
  }

  private async update() {
    this.theatres = await firstValueFrom(this.service.getAll());
    this.dataSource = new MatTableDataSource(this.theatres);
  }
}