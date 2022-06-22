import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { Theatre } from 'src/app/core/models/theatre.model';
import { TheatreService } from 'src/app/core/services/theatre.service';
import { UtilsService } from 'src/app/shared/services/utils.service';


@Component({
  selector: 'es-edit-theatre',
  templateUrl: './edit-theatre.component.html',
  styleUrls: ['./edit-theatre.component.scss']
})
export class EditTheatreComponent implements OnInit {

  private id!: number;

  form!: FormGroup;

  constructor(
    private service: TheatreService,
    private utils: UtilsService,
    private dialog: MatDialogRef<EditTheatreComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Theatre
    ) { }

  ngOnInit() {
    this.init();
  }

  cancel(): void {
    this.close(false);
  }

  async save(): Promise<void> {
    if (this.form.valid) {
      const data = this.form.getRawValue() as Theatre;

      if (this.id) {
        await firstValueFrom(this.service.update(data));
      } else {
        await firstValueFrom(this.service.create(data));
      }

      this.close(true);
    }
  }

  private close(success: boolean): void {
    this.dialog.close(success);
  }

  private init() {
    this.id = this.data?.id;

    this.form = new FormGroup({
      name: new FormControl(this.data?.name || '', Validators.required),
      address: new FormControl(this.data?.address || ''),
      city: new FormControl(this.data?.city || ''),
      state: new FormControl(this.data?.state || ''),
      zipCode: new FormControl(this.data?.zipCode || ''),
      telephone: new FormControl(this.data?.telephone || '')
    });
  }
}
