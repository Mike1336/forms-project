import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { ContractCorrectionFormComponent } from './components/contract-correction-form/contract-correction-form.component';

@NgModule({
  declarations: [
    ContractCorrectionFormComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    // Material
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [
    ContractCorrectionFormComponent,
  ],
})
export class ContractCorrectionFormModule { }
