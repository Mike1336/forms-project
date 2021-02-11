import { Component, OnInit } from '@angular/core';

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

  public displayedColumns: string[] = ['name', 'plannedExecutionDate', 'money', 'socialPartner', 'controlOpinion', 'menu'];
  public dataSource = ELEMENT_DATA;

  constructor() { }

  public ngOnInit(): void {
  }

}
