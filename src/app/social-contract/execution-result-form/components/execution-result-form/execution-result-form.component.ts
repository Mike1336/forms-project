import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { ExecutionResultFormDialogComponent } from '../execution-result-form-dialog/execution-result-form-dialog.component';

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

  public displayedColumns: string[] = ['add', 'date', 'familyMembersQuantity', 'totalFamilyIncome', 'averageFamilyIncome', 'concluded', 'menu'];
  public dataSource = ELEMENT_DATA;

  constructor(private _dialog: MatDialog) { }

  public ngOnInit(): void {
  }

  public showDialog(): void {
    this._dialog.open(ExecutionResultFormDialogComponent);
  }

}
