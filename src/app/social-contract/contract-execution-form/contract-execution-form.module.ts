import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { ContractExecutionFormComponent } from './components/contract-execution-form/contract-execution-form.component';
import { ContractExecutionFormDialogComponent } from './components/contract-execution-form-dialog/contract-execution-form-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    ContractExecutionFormComponent,
    ContractExecutionFormDialogComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    // Angular Material
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [
    ContractExecutionFormComponent,
  ],
})
export class ContractExecutionFormModule { }
