import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { ISocialEvent } from '../interfaces/social-event';

@Injectable()
export class DataService {

  private _content: ISocialEvent[] = [
    {
      id: 1,
      name: 'Обучение',
      plannedExecutionDate: '10.09.2020',
      money: false,
      socialPartner: 'Служба занятости',
      controlOpinion: 'Выполнено',
    },
    {
      id: 2,
      name: 'Открытие ИП',
      plannedExecutionDate: '12.09.2020',
      money: false,
      socialPartner: 'Служба занятости',
      controlOpinion: 'Выполнено',
    },
    {
      id: 3,
      name: 'Покупка оборудования',
      plannedExecutionDate: '15.09.2020',
      money: false,
      socialPartner: 'Министерство сельского хозяйства',
      controlOpinion: 'Выполнено',
    },
    {
      id: 4,
      name: 'Покупка сырья',
      plannedExecutionDate: '20.09.2020',
      money: false,
      socialPartner: 'Министерство сельского хозяйства',
      controlOpinion: 'Выполнено',
    },
  ];

  private _content$ = new BehaviorSubject(this._content);

  constructor() {}

  public get content$(): Observable<ISocialEvent[]> {
    return this._content$.asObservable();
  }

  public add(member: ISocialEvent): void {
    this._content = [member, ...this._content];
    this._content$.next(this._content);
    console.log(`${member.name} has been added`);
  }

  public update(member: ISocialEvent): void {
    const index = this._content.findIndex((iterableMember) => iterableMember.id === member.id);

    this._content[index] = member;
    this._content$.next([...this._content]);
    console.log('Member has been deleted');
  }

  public delete(member: ISocialEvent): void {
    this._content = this._content.filter((iterableMember) => iterableMember.id !== member.id);
    this._content$.next([...this._content]);
    console.log(`${member.name} has been deleted`);
  }

}
