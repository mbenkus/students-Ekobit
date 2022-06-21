import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { DateAdapter,MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfirmComponent } from './components/confirm/confirm.component';

import { ConfirmDirective } from './directives/confirm.directive';
import { DurationFormatPipe } from './pipes/duration-format.pipe';
import { UtilsService } from './services/utils.service';


const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatInputModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatGridListModule,
  MatFormFieldModule,
  MatIconModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatExpansionModule,
  MatSliderModule,
  MatMenuModule,
  MatTabsModule,
  MatProgressBarModule,
  MatSortModule,
  MatChipsModule,
  MatAutocompleteModule
];


const pipes = [
  DurationFormatPipe
];

const directives = [
  ConfirmDirective
];

const dialogs = [
  ConfirmComponent
]

@NgModule({
  declarations: [
    ...pipes,
    ...directives,
    ...dialogs,
  ],
  imports: [
    ...material,
    CommonModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  exports: [
    ...pipes,
    ...directives,
    ...dialogs,
    ...material,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ...pipes,
    UtilsService
  ]
})

export class SharedModule { }
