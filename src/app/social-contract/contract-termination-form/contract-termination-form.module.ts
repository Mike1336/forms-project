import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

import { ContractTerminationFormComponent } from './components/contract-termination-form/contract-termination-form.component';
import { ContractTerminationFormDialogComponent } from './components/contract-termination-form-dialog/contract-termination-form-dialog.component';


@NgModule({
  declarations: [
    ContractTerminationFormComponent,
    ContractTerminationFormDialogComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    // Angular Material
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
  exports: [
    ContractTerminationFormComponent,
  ],
})
export class ContractTerminationFormModule { }
