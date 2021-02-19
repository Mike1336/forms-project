import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { IFamilyMember } from '../interfaces/family-member';

@Injectable()
export class DataService {

  private _content: IFamilyMember[] = [
    {
      id: 1,
      lastname: 'Иванов',
      name: 'Игорь',
      patronymic: 'Семенович',
      snils: '987-9865-273-78',
      role: 'Отец',
      headOfFamily: false,
    },
    {
      id: 2,
      lastname: 'Иванова',
      name: 'Ольга',
      patronymic: 'Петровна',
      snils: '526-7269-092-09',
      role: 'Мать',
      headOfFamily: false,
    },
    {
      id: 3,
      lastname: 'Иванова',
      name: 'Ирина',
      patronymic: 'Игоревна',
      snils: '726-092-473-87',
      role: 'Дочь',
      headOfFamily: false,
    },
  ];

  private _content$ = new BehaviorSubject(this._content);

  constructor() {}

  public get content$(): Observable<IFamilyMember[]> {
    return this._content$.asObservable();
  }

  public add(member: IFamilyMember): void {
    this._content = [member, ...this._content];
    this._content$.next(this._content);
    console.log(`${member.name} has been added`);
  }

  public update(member: IFamilyMember): void {
    const index = this._content.findIndex((iterableMember) => iterableMember.id === member.id);

    this._content[index] = member;
    this._content$.next([...this._content]);
    console.log('Member has been deleted');
  }

  public delete(member: IFamilyMember): void {
    this._content = this._content.filter((iterableMember) => iterableMember.id !== member.id);
    this._content$.next([...this._content]);
    console.log(`${member.name} has been deleted`);
  }

}
