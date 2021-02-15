import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';

import { SocialAdaptationFormComponent } from './components/social-adaptation-form/social-adaptation-form.component';
import { SocialAdaptationFormDialogComponent } from './components/social-adaptation-form-dialog/social-adaptation-form-dialog.component';


@NgModule({
  declarations: [
    SocialAdaptationFormComponent,
    SocialAdaptationFormDialogComponent,
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
    MatDialogModule,
  ],
  exports: [
    SocialAdaptationFormComponent,
  ],
})
export class SocialAdaptationFormModule { }
