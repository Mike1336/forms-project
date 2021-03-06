import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { ISocialEvent } from '../interfaces/social-event';

@Injectable()
export class DataService {

  private _content: ISocialEvent[] = [
    {
      id: 1,
      name: 'Обучение',
      plannedExecutionDate: new Date('09.10.2020'),
      money: false,
      socialPartner: 'Служба занятости',
      controlOpinion: 'Выполнено',
    },
    {
      id: 2,
      name: 'Открытие ИП',
      plannedExecutionDate: new Date('09.12.2020'),
      money: false,
      socialPartner: 'Служба занятости',
      controlOpinion: 'Выполнено',
    },
    {
      id: 3,
      name: 'Покупка оборудования',
      plannedExecutionDate: new Date('09.15.2020'),
      money: false,
      socialPartner: 'Министерство сельского хозяйства',
      controlOpinion: 'Выполнено',
    },
    {
      id: 4,
      name: 'Покупка сырья',
      plannedExecutionDate: new Date('09.20.2020'),
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

  public add(event: ISocialEvent): void {
    this._content = [event, ...this._content];
    this._content$.next(this._content);
  }

  public update(event: ISocialEvent): void {
    const index = this._content.findIndex((iterableEvent) => iterableEvent.id === event.id);

    this._content[index] = event;
    this._content$.next([...this._content]);
  }

  public delete(event: ISocialEvent): void {
    this._content = this._content.filter((iterableEvent) => iterableEvent.id !== event.id);
    this._content$.next([...this._content]);
  }

}
