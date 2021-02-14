import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { SocialAdaptationFormDialogComponent } from '../social-adaptation-form-dialog/social-adaptation-form-dialog.component';

const ELEMENT_DATA = [
  {
    name: 'Обучение',
    plannedExecutionDate: '10.09.2020',
    money: false,
    socialPartner: 'Служба занятости',
    controlOpinion: 'Выполнено',
  },
  {
    name: 'Открытие ИП',
    plannedExecutionDate: '12.09.2020',
    money: false,
    socialPartner: 'Служба занятости',
    controlOpinion: 'Выполнено',
  },
  {
    name: 'Покупка оборудования',
    plannedExecutionDate: '15.09.2020',
    money: false,
    socialPartner: 'Министерство сельского хозяйства',
    controlOpinion: 'Выполнено',
  },
  {
    name: 'Покупка сырья',
    plannedExecutionDate: '20.09.2020',
    money: false,
    socialPartner: 'Министерство сельского хозяйства',
    controlOpinion: 'Выполнено',
  },
];

@Component({
  selector: 'social-adaptation-form',
  templateUrl: './social-adaptation-form.component.html',
  styleUrls: ['./social-adaptation-form.component.scss'],
})
export class SocialAdaptationFormComponent implements OnInit {

  public displayedColumns: string[] = ['add', 'name', 'plannedExecutionDate', 'money', 'socialPartner', 'controlOpinion', 'menu'];
  public dataSource = ELEMENT_DATA;

  constructor(private _dialog: MatDialog) { }

  public ngOnInit(): void {
  }

  public showDialog(): void {
    this._dialog.open(SocialAdaptationFormDialogComponent);
  }

}
