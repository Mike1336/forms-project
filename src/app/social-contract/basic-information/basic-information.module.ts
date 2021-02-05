import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInformationRoutingModule } from './basic-information-routing.module';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    FormComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    BasicInformationRoutingModule,
  ],
  exports: [
    FormComponent,
  ],
})
export class BasicInformationModule { }
