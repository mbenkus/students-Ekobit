import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {
  }

  openDialog(component: ComponentType<unknown>, data: unknown, disable = false, dialogWidth = '640px', panelClass = '', autoFocus = true): MatDialogRef<unknown, unknown> {
    return this.dialog.open(component, { data, disableClose: disable, width: dialogWidth, panelClass, autoFocus });
  }

  openSnackBar(message: string, time = 3000): void {
    const action = 'Dismiss';
    this.snackBar.open(message, action, {
      duration: time
    });
  }
}
