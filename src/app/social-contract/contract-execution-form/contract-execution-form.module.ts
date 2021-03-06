import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { ContractExecutionFormComponent } from './components/contract-execution-form/contract-execution-form.component';
import { ContractExecutionFormDialogComponent } from './components/contract-execution-form-dialog/contract-execution-form-dialog.component';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    ContractExecutionFormComponent,
    ContractExecutionFormDialogComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,
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
  providers: [
    DataService,
  ],
})
export class ContractExecutionFormModule { }
