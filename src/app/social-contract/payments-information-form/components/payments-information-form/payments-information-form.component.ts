import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { PaymentsInformationFormDialogComponent } from '../payments-information-form-dialog/payments-information-form-dialog.component';

const ELEMENT_DATA = [
  {
    date: '01.09.2020',
    amount: '30000',
    event: '',
    description: 'Выплата на оплату обучения',
    payedOut: false,
  },
  {
    date: '01.04.2021',
    amount: '10000',
    event: '',
    description: 'Доплата к окладу в размере прожиточного минимума',
    payedOut: false,
  },
  {
    date: '01.05.2021',
    amount: '10000',
    event: '',
    description: 'Доплата к окладу в размере прожиточного минимума',
    payedOut: false,
  },
  {
    date: '01.06.2020',
    amount: '10000',
    event: '',
    description: 'Доплата к окладу в размере прожиточного минимума',
    payedOut: false,
  },
];

@Component({
  selector: 'payments-information-form',
  templateUrl: './payments-information-form.component.html',
  styleUrls: ['./payments-information-form.component.scss'],
})
export class PaymentsInformationFormComponent implements OnInit {

  public displayedColumns = ['add', 'date', 'amount', 'event', 'description', 'payedOut', 'menu'];
  public dataSource = ELEMENT_DATA;

  constructor(private _dialog: MatDialog) { }

  public ngOnInit(): void {
  }

  public showDialog(): void {
    this._dialog.open(PaymentsInformationFormDialogComponent);
  }

}
