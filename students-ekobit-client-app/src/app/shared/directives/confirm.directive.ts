import { Directive, EventEmitter, HostListener, Input,Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';

import { ConfirmComponent } from '../components/confirm/confirm.component';

@Directive({
  selector: '[esConfirm]'
})
export class ConfirmDirective {

  @Input() confirmTitle: string = '';
  @Input() confirmText: string = '';
  @Output() accept = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor(private dialog: MatDialog) {
  }


  @HostListener('click')
  async onClick() {
    const data = { title: this.confirmTitle, text: this.confirmText };
    const modal = this.dialog.open(ConfirmComponent, { data });

    const result = await firstValueFrom(modal.afterClosed()) as boolean;

    if (result) {
      this.accept.emit(null);
    } else {
      this.cancel.emit(null);
    }
  }

}
