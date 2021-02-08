import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { FormComponent } from './components/form/form.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    FormComponent,
    ModalComponent,
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
  ],
  exports: [
    FormComponent,
  ],
})
export class ContractExecutionModule { }
