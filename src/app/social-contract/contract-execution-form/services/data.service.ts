import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { IExecutionEvent } from '../interfaces/execution-event';

@Injectable()
export class DataService {

  private _content: IExecutionEvent[] = [
    {
      id: 1,
      name: 'Обучение',
      confirmationDocument: 'Сертификат о прохождении обучения',
      confirmationDocumentData: 'А232 от 10.02.2020',
      fileLink: 'ссылка',
    },
    {
      id: 2,
      name: 'Открытие ИП',
      confirmationDocument: 'Выписка из ФНС',
      confirmationDocumentData: '1232 от 14.02.2020',
      fileLink: 'ссылка',
    },
    {
      id: 3,
      name: 'Открытие ИП',
      confirmationDocument: 'Квитанция об оплате госпошлины',
      confirmationDocumentData: '12 от 10.02.2020',
      fileLink: 'ссылка',
    },
    {
      id: 4,
      name: 'Покупка оборудования 1',
      confirmationDocument: 'Товарный и кассовый чек',
      confirmationDocumentData: 'от 20.02.2020',
      fileLink: 'ссылка',
    },
  ];
  private _content$ = new BehaviorSubject(this._content);

  constructor() {}

  public get content$(): Observable<IExecutionEvent[]> {
    return this._content$.asObservable();
  }

  public add(event: IExecutionEvent): void {
    this._content = [event, ...this._content];
    this._content$.next(this._content);
  }

  public update(event: IExecutionEvent): void {
    const index = this._content.findIndex((iterableEvent) => iterableEvent.id === event.id);

    this._content[index] = event;
    this._content$.next([...this._content]);
  }

  public delete(event: IExecutionEvent): void {
    this._content = this._content.filter((iterableEvent) => iterableEvent.id !== event.id);
    this._content$.next([...this._content]);
  }

}
