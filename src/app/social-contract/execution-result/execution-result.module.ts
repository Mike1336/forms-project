import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';


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
  ],
  exports: [
    FormComponent,
  ],
})
export class ExecutionResultModule { }
