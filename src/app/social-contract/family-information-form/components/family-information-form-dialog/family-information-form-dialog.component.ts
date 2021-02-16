import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { IFamilyMember } from '../../interfaces/family-member';

@Component({
  templateUrl: './family-information-form-dialog.component.html',
  styleUrls: ['./family-information-form-dialog.component.scss'],
})
export class FamilyInformationFormDialogComponent implements OnInit {

  public form: FormGroup;

  public memberLastnameCtl;

  public memberNameCtl;

  public memberPatronymicCtl;

  public memberSnilsCtl;

  public memberRoleCtl;

  public isChildCtl;

  public isHeadOfFamilyCtl;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private _data: any,
    private _dialogRef: MatDialogRef<IFamilyMember>,
  ) { }

  public ngOnInit(): void {
    this._initForm();
  }

  public save(): void {
    if (this.form.invalid) {
      return;
    }

    const member = {
      id: this._data.id,
      ...this.form.value,
    };

    this._dialogRef.close(member);
  }

  private _initForm(): void {
    this.memberLastnameCtl = new FormControl(this._data.lastname || null, [
      Validators.required,
    ]);

    this.memberNameCtl = new FormControl(this._data.name || null, [
      Validators.required,
    ]);
    this.memberPatronymicCtl = new FormControl(this._data.patronymic || null, [
      Validators.required,
    ]);
    this.memberSnilsCtl = new FormControl(this._data.snils || null, [
      Validators.required,
    ]);
    this.memberRoleCtl = new FormControl(this._data.role || null, [
      Validators.required,
    ]);
    this.isChildCtl = new FormControl(false);
    this.isHeadOfFamilyCtl = new FormControl(this._data.headOfFamily || false);

    this.form = new FormGroup({
      lastname: this.memberLastnameCtl,
      name: this.memberNameCtl,
      patronymic: this.memberPatronymicCtl,
      snils: this.memberSnilsCtl,
      role: this.memberRoleCtl,
      headOfFamily: this.isHeadOfFamilyCtl,
    });
  }

}
