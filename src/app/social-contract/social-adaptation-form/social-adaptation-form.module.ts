import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { SocialAdaptationFormComponent } from './components/social-adaptation-form/social-adaptation-form.component';
import { SocialAdaptationFormDialogComponent } from './components/social-adaptation-form-dialog/social-adaptation-form-dialog.component';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    SocialAdaptationFormComponent,
    SocialAdaptationFormDialogComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,
    // Angular Material
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
  ],
  exports: [
    SocialAdaptationFormComponent,
  ],
  providers: [
    DataService,
  ],
})
export class SocialAdaptationFormModule { }
