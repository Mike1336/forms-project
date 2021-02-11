import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { PaymentsInformationFormComponent } from './components/payments-information-form/payments-information-form.component';


@NgModule({
  declarations: [
    PaymentsInformationFormComponent,
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
  ],
  exports: [
    PaymentsInformationFormComponent,
  ],
})
export class PaymentsInformationFormModule { }
