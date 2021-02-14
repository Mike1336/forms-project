import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { FamilyInformationFormComponent } from './components/family-information-form/family-information-form.component';
import { FamilyInformationFormDialogComponent } from './components/family-information-form-dialog/family-information-form-dialog.component';


@NgModule({
  declarations: [
    FamilyInformationFormComponent,
    FamilyInformationFormDialogComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,
    // Angular Material
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [
    FamilyInformationFormComponent,
  ],
})
export class FamilyInformationFormModule { }
