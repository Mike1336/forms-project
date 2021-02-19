import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ISocialEvent, SocialEvent } from '../../interfaces/social-event';

@Component({
  templateUrl: './social-adaptation-form-dialog.component.html',
  styleUrls: ['./social-adaptation-form-dialog.component.scss'],
})
export class SocialAdaptationFormDialogComponent implements OnInit {

  public form: FormGroup;

  public plannedExecutionDateCtl;

  public nameCtl;

  public moneyCtl;

  public socialPartnerCtl;

  public controlOpinionCtl;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private _data: SocialEvent,
    private _dialogRef: MatDialogRef<ISocialEvent>,
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
    this.plannedExecutionDateCtl = new FormControl(this._data.plannedExecutionDate || null, [
      Validators.required,
    ]);

    this.nameCtl = new FormControl(this._data.name || null, [
      Validators.required,
    ]);

    this.moneyCtl = new FormControl(this._data.money || false);

    this.socialPartnerCtl = new FormControl(this._data.socialPartner || null, [
      Validators.required,
    ]);
    this.controlOpinionCtl = new FormControl(this._data.controlOpinion || null, [
      Validators.required,
    ]);

    this.form = new FormGroup({
      plannedExecutionDate: this.plannedExecutionDateCtl,
      name: this.nameCtl,
      money: this.moneyCtl,
      socialPartner: this.socialPartnerCtl,
      controlOpinion: this.controlOpinionCtl,
    });
  }

}
