import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { PaymentsInformationFormComponent } from './components/payments-information-form/payments-information-form.component';
import { PaymentsInformationFormDialogComponent } from './components/payments-information-form-dialog/payments-information-form-dialog.component';
import { DataService } from './services/data.service';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    PaymentsInformationFormComponent,
    PaymentsInformationFormDialogComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,
    // Material
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCheckboxModule,
    MatDatepickerModule,
  ],
  exports: [
    PaymentsInformationFormComponent,
  ],
  providers: [
    DataService,
  ],
})
export class PaymentsInformationFormModule { }
