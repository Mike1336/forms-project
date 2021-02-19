import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { IResult } from '../interfaces/result';

@Injectable()
export class DataService {

  private _content: IResult[] = [
    {
      id: 1,
      date: new Date('09.10.2020'),
      familyMembersQuantity: '4',
      totalFamilyIncome: '40 000',
      averageFamilyIncome: '10 000',
      concluded: 'Выполнено',
    },
  ];

  private _content$ = new BehaviorSubject(this._content);

  constructor() {}

  public get content$(): Observable<IResult[]> {
    return this._content$.asObservable();
  }

  public add(result: IResult): void {
    this._content = [result, ...this._content];
    this._content$.next(this._content);
  }

  public update(result: IResult): void {
    const index = this._content.findIndex((iterableResult) => iterableResult.id === result.id);

    this._content[index] = result;
    this._content$.next([...this._content]);
  }

  public delete(result: IResult): void {
    this._content = this._content.filter((iterableResult) => iterableResult.id !== result.id);
    this._content$.next([...this._content]);
  }

}
