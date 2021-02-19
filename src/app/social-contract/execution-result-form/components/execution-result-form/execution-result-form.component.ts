import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { tap } from 'rxjs/operators';

import { ExecutionResultFormDialogComponent } from '../execution-result-form-dialog/execution-result-form-dialog.component';
import { IResult } from '../../interfaces/result';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'execution-result-form',
  templateUrl: './execution-result-form.component.html',
  styleUrls: ['./execution-result-form.component.scss'],
})
export class ExecutionResultFormComponent implements OnInit {

  public displayedColumns: string[] = ['add', 'date', 'familyMembersQuantity', 'totalFamilyIncome', 'averageFamilyIncome', 'concluded', 'menu'];
  public results: IResult[];

  constructor(
    private _dataService: DataService,
    private _dialog: MatDialog,
    private _cdRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this._listenTableData();
  }

  public getTableData(): IResult[] {
    return this.results;
  }

  public showDialogToAdd(): void {
    const dialog = this._dialog.open(ExecutionResultFormDialogComponent, {
      data: {
        id: this.results.length + 1,
      },
    });

    dialog.afterClosed()
      .pipe(
        tap((result: IResult) => {
          if (!result) {
            return;
          }
          this._dataService.add(result);
        }),
      )
      .subscribe();
  }

  public showDialogToUpdate(result: IResult): void {
    const dialog = this._dialog.open(ExecutionResultFormDialogComponent, {
      data: {
        ...result,
      },
    });

    dialog.afterClosed()
      .pipe(
          tap((updatedResult: IResult) => {
            if (!updatedResult) {
              return;
            }
            this._dataService.update(updatedResult);
          }),
      )
      .subscribe();
  }

  public delete(result: IResult): void {
    this._dataService.delete(result);
  }

  private _listenTableData(): void {
    this._dataService.content$
      .pipe(
        tap((data) => {
          this.results = data;
          this._cdRef.markForCheck();
        }),
      )
      .subscribe();
  }

}
