import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { IExecutionEvent, ExecutionEvent } from '../../interfaces/execution-event';

@Component({
  templateUrl: './contract-execution-form-dialog.component.html',
  styleUrls: ['./contract-execution-form-dialog.component.scss'],
})
export class ContractExecutionFormDialogComponent implements OnInit {

  public form: FormGroup;

  public nameCtl;

  public confirmationDocumentCtl;

  public confirmationDocumentDataCtl;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private _data: ExecutionEvent,
    private _dialogRef: MatDialogRef<IExecutionEvent>,
  ) { }

  public ngOnInit(): void {
    this._initForm();
  }

  public save(): void {
    if (this.form.invalid) {
      return;
    }

    const event = {
      id: this._data.id,
      ...this.form.value,
    };

    this._dialogRef.close(event);
  }

  private _initForm(): void {
    this.nameCtl = new FormControl(this._data.name || null, [
      Validators.required,
    ]);

    this.confirmationDocumentCtl = new FormControl(this._data.confirmationDocument || null, [
      Validators.required,
    ]);

    this.confirmationDocumentDataCtl = new FormControl(
      this._data.confirmationDocumentData || null, [
        Validators.required,
      ]);

    this.form = new FormGroup({
      name: this.nameCtl,
      confirmationDocument: this.confirmationDocumentCtl,
      confirmationDocumentData: this.confirmationDocumentDataCtl,
    });
  }

}
