import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Result, IResult } from '../../interfaces/result';

@Component({
  templateUrl: './execution-result-form-dialog.component.html',
  styleUrls: ['./execution-result-form-dialog.component.scss'],
})
export class ExecutionResultFormDialogComponent implements OnInit {

  public form: FormGroup;

  public dateCtl;

  public familyMembersQuantityCtl;

  public totalFamilyIncomeCtl;

  public averageFamilyIncomeCtl;

  public concludedCtl;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private _data: Result,
    private _dialogRef: MatDialogRef<IResult>,
  ) { }

  public ngOnInit(): void {
    this._initForm();
  }

  public save(): void {
    if (this.form.invalid) {
      return;
    }

    const result = {
      id: this._data.id,
      ...this.form.value,
    };

    this._dialogRef.close(result);
  }

  private _initForm(): void {
    this.dateCtl = new FormControl(this._data.date || null, [
      Validators.required,
    ]);

    this.familyMembersQuantityCtl = new FormControl(this._data.familyMembersQuantity || null, [
      Validators.required,
    ]);

    this.totalFamilyIncomeCtl = new FormControl(this._data.totalFamilyIncome || null, [
      Validators.required,
    ]);

    this.averageFamilyIncomeCtl = new FormControl(this._data.averageFamilyIncome || null, [
      Validators.required,
    ]);
    this.concludedCtl = new FormControl(this._data.concluded || null, [
      Validators.required,
    ]);

    this.form = new FormGroup({
      date: this.dateCtl,
      familyMembersQuantity: this.familyMembersQuantityCtl,
      totalFamilyIncome: this.totalFamilyIncomeCtl,
      averageFamilyIncome: this.averageFamilyIncomeCtl,
      concluded: this.concludedCtl,
    });
  }

}
