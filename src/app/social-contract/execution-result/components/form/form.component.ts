import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA = [
  {
    date: '10.09.2020',
    familyMembersQuantity: '4',
    totalFamilyIncome: '40 000',
    averageFamilyIncome: '10 000',
    concluded: 'Выполнено',
  },
];

@Component({
  selector: 'execution-result-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  public displayedColumns: string[] = ['date', 'familyMembersQuantity', 'totalFamilyIncome', 'averageFamilyIncome', 'concluded', 'menu'];
  public dataSource = ELEMENT_DATA;

  constructor() { }

  public ngOnInit(): void {
  }

}
