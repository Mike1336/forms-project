import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  selector: 'contract-correction-form',
  templateUrl: './contract-correction-form.component.html',
  styleUrls: ['./contract-correction-form.component.scss'],
})
export class ContractCorrectionFormComponent implements OnInit {

  public form: FormGroup;

  public additionalAgreementDateCtl = new FormControl(null, [
    Validators.required,
  ]);
  public dateEndRenewedCtl = new FormControl(null, [
    Validators.required,
  ]);
  public modificationReasonCtl = new FormControl(null, [
    Validators.maxLength(100),
    Validators.required,
  ]);

  public displayedColumns: string[] = ['lastname', 'name', 'patronymic', 'snils', 'role', 'headOfFamily', 'menu'];
  public dataSource = ELEMENT_DATA;

  constructor() { }

  public ngOnInit(): void {
    this._initForm();
  }

  public getForm(): FormGroup {
    if (!this.form) {
      this._initForm();
    }

    return this.form;
  }

  private _initForm(): void {
    this.form = new FormGroup({
      additionalAgreementDate: this.additionalAgreementDateCtl,
      dateEndRenewed: this.dateEndRenewedCtl,
      modificationReason: this.modificationReasonCtl,
    });
  }

}
