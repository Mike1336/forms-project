import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { FamilyInformationFormDialogComponent } from '../family-information-form-dialog/family-information-form-dialog.component';

const ELEMENT_DATA = [
  {
    lastname: 'Иванов',
    name: 'Игорь',
    patronymic: 'Семенович',
    snils: '987-9865-273-78',
    role: 'Отец',
    headOfFamily: false,
  },
  {
    lastname: 'Иванова',
    name: 'Ольга',
    patronymic: 'Петровна',
    snils: '526-7269-092-09',
    role: 'Мать',
    headOfFamily: false,
  },
  {
    lastname: 'Иванова',
    name: 'Ирина',
    patronymic: 'Игоревна',
    snils: '726-092-473-87',
    role: 'Дочь',
    headOfFamily: false,
  },
];

@Component({
  selector: 'family-information-form',
  templateUrl: './family-information-form.component.html',
  styleUrls: ['./family-information-form.component.scss'],
})
export class FamilyInformationFormComponent implements OnInit {

  public form: FormGroup;

  public familyMembersCountCtl = new FormControl(null, [
    Validators.maxLength(2),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    Validators.required,
  ]);
  public familyIncomeCapitalByExecutionCtl = new FormControl(null, [
    Validators.minLength(2),
    Validators.maxLength(15),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    Validators.required,
  ]);
  public familyMembersCountByExecutionCtl = new FormControl(null, [
    Validators.maxLength(2),
    Validators.required,
  ]);
  public familyIncomePerCapitalCtl = new FormControl(null, [
    Validators.minLength(2),
    Validators.maxLength(15),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    Validators.required,
  ]);

  public displayedColumns: string[] = ['add', 'lastname', 'name', 'patronymic', 'snils', 'role', 'headOfFamily', 'menu'];
  public dataSource = ELEMENT_DATA;

  constructor(private _dialog: MatDialog) { }

  public ngOnInit(): void {
    this._initForm();
  }

  public getForm(): FormGroup {
    if (!this.form) {
      this._initForm();
    }

    return this.form;
  }

  public showDialog(): void {
    this._dialog.open(FamilyInformationFormDialogComponent);
  }

  private _initForm(): void {
    this.form = new FormGroup({
      familyMembersCount: this.familyMembersCountCtl,
      familyIncomeCapitalByExecution: this.familyIncomeCapitalByExecutionCtl,
      familyMembersCountByExecution: this.familyMembersCountByExecutionCtl,
      familyIncomePerCapital: this.familyIncomePerCapitalCtl,
    });
  }

}
