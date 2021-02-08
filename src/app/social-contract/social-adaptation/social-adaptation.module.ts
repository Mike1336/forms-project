import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FormComponent } from './components/form/form.component';
import { ModalComponent } from './components/modal/modal.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


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
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  exports: [
    FormComponent,
  ],
})
export class SocialAdaptationModule { }
