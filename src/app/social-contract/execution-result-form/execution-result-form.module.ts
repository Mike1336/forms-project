import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { ExecutionResultFormComponent } from './components/execution-result-form/execution-result-form.component';
import { ExecutionResultFormDialogComponent } from './components/execution-result-form-dialog/execution-result-form-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    ExecutionResultFormComponent,
    ExecutionResultFormDialogComponent,
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
    ExecutionResultFormComponent,
    ExecutionResultFormDialogComponent
  ],
})
export class ExecutionResultFormModule { }