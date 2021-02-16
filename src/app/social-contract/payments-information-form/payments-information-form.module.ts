import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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


@NgModule({
  declarations: [
    PaymentsInformationFormComponent,
    PaymentsInformationFormDialogComponent,
  ],
  imports: [
    // Angular
    CommonModule,
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
  ],
  exports: [
    PaymentsInformationFormComponent,
  ],
  providers: [
    DataService,
  ],
})
export class PaymentsInformationFormModule { }
