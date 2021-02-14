import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FamilyInformationFormDialogComponent} from '../family-information-form-dialog/family-information-form-dialog.component';

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

  public displayedColumns: string[] = ['add', 'lastname', 'name', 'patronymic', 'snils', 'role', 'headOfFamily', 'menu'];
  public dataSource = ELEMENT_DATA;

  constructor(private _dialog: MatDialog) { }

  public ngOnInit(): void {
  }

  public showDialog(): void {
    this._dialog.open(FamilyInformationFormDialogComponent);
  }

}
