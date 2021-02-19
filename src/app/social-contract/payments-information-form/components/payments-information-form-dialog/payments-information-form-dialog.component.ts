import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { IPayment, Payment } from '../../interfaces/payment';

@Component({
  templateUrl: './payments-information-form-dialog.component.html',
  styleUrls: ['./payments-information-form-dialog.component.scss'],
})
export class PaymentsInformationFormDialogComponent implements OnInit {

  public form: FormGroup;

  public dateCtl;

  public amountCtl;

  public eventCtl;

  public descriptionCtl;

  public payedOutCtl;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private _data: Payment,
    private _dialogRef: MatDialogRef<IPayment>,
  ) { }

  public ngOnInit(): void {
    this._initForm();
  }

  public save(): void {
    if (this.form.invalid) {
      return;
    }

    const date = this.dateCtl.value.format('L');

    const payment = {
      id: this._data.id,
      ...this.form.value,
      date,
    };

    this._dialogRef.close(payment);
  }

  private _initForm(): void {
    this.dateCtl = new FormControl(this._data.date || null, [
      Validators.required,
    ]);

    this.amountCtl = new FormControl(this._data.amount || null, [
      Validators.required,
    ]);

    this.eventCtl = new FormControl(this._data.event || null);

    this.descriptionCtl = new FormControl(this._data.description || null, [
      Validators.required,
    ]);
    this.payedOutCtl = new FormControl(this._data.payedOut || false);

    this.form = new FormGroup({
      date: this.dateCtl,
      amount: this.amountCtl,
      event: this.eventCtl,
      description: this.descriptionCtl,
      payedOut: this.payedOutCtl,
    });
  }

}
