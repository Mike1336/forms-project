import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { IPayment } from '../interfaces/payment';

@Injectable()
export class DataService {

  private _content: IPayment[] = [
    {
      id: 1,
      date: new Date('09.01.2020'),
      amount: '30000',
      event: '',
      description: 'Выплата на оплату обучения',
      payedOut: false,
    },
    {
      id: 2,
      date: new Date('04.01.2021'),
      amount: '10000',
      event: '',
      description: 'Доплата к окладу в размере прожиточного минимума',
      payedOut: false,
    },
    {
      id: 3,
      date: new Date('05.01.2021'),
      amount: '10000',
      event: '',
      description: 'Доплата к окладу в размере прожиточного минимума',
      payedOut: false,
    },
    {
      id: 4,
      date: new Date('06.01.2021'),
      amount: '10000',
      event: '',
      description: 'Доплата к окладу в размере прожиточного минимума',
      payedOut: false,
    },
  ];

  private _content$ = new BehaviorSubject(this._content);

  constructor() {}

  public get content$(): Observable<IPayment[]> {
    return this._content$.asObservable();
  }

  public add(payment: IPayment): void {
    this._content = [payment, ...this._content];
    this._content$.next(this._content);
  }

  public update(payment: IPayment): void {
    const index = this._content.findIndex((iterablePayment) => iterablePayment.id === payment.id);

    this._content[index] = payment;
    this._content$.next([...this._content]);
  }

  public delete(payment: IPayment): void {
    this._content = this._content.filter((iterablePayment) => iterablePayment.id !== payment.id);
    this._content$.next([...this._content]);
  }

}
