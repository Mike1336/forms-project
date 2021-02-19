import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

import { ContractTerminationFormComponent } from './components/contract-termination-form/contract-termination-form.component';
import { ContractTerminationFormDialogComponent } from './components/contract-termination-form-dialog/contract-termination-form-dialog.component';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    ContractTerminationFormComponent,
    ContractTerminationFormDialogComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,
    // Angular Material
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  exports: [
    ContractTerminationFormComponent,
  ],
})
export class ContractTerminationFormModule { }
