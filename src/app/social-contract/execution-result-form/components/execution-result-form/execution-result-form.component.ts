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
  templateUrl: './execution-result-form.component.html',
  styleUrls: ['./execution-result-form.component.scss'],
})
export class ExecutionResultFormComponent implements OnInit {

  public displayedColumns: string[] = ['date', 'familyMembersQuantity', 'totalFamilyIncome', 'averageFamilyIncome', 'concluded', 'menu'];
  public dataSource = ELEMENT_DATA;

  constructor() { }

  public ngOnInit(): void {
  }

}
