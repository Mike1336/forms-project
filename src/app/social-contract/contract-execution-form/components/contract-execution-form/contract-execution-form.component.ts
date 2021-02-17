import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { tap } from 'rxjs/operators';

import { ContractExecutionFormDialogComponent } from '../contract-execution-form-dialog/contract-execution-form-dialog.component';
import { IExecutionEvent } from '../../interfaces/execution-event';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'contract-execution-form',
  templateUrl: './contract-execution-form.component.html',
  styleUrls: ['./contract-execution-form.component.scss'],
})
export class ContractExecutionFormComponent implements OnInit {

  public displayedColumns: string[] = ['add', 'name', 'confirmationDocument', 'confirmationDocumentData', 'fileLink', 'menu'];
  public executionEvents: IExecutionEvent[];

  constructor(
    private _dataService: DataService,
    private _dialog: MatDialog,
    private _cdRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this._listenTableData();
  }

  public getTableData(): IExecutionEvent[] {
    return this.executionEvents;
  }

  public showDialogToAdd(): void {
    const dialog = this._dialog.open(ContractExecutionFormDialogComponent, {
      data: {
        id: this.executionEvents.length + 1,
      },
    });

    dialog.afterClosed()
      .pipe(
        tap((event: IExecutionEvent) => {
          if (!event) {
            return;
          }
          this._dataService.add(event);
        }),
      )
      .subscribe();
  }

  public showDialogToUpdate(payment: IExecutionEvent): void {
    const dialog = this._dialog.open(ContractExecutionFormDialogComponent, {
      data: {
        ...payment,
      },
    });

    dialog.afterClosed()
      .pipe(
        tap((updatedEvent: IExecutionEvent) => {
          if (!updatedEvent) {
            return;
          }
          this._dataService.update(updatedEvent);
        }),
      )
      .subscribe();
  }

  public delete(event: IExecutionEvent): void {
    this._dataService.delete(event);
  }

  private _listenTableData(): void {
    this._dataService.content$
      .pipe(
        tap((data) => {
          this.executionEvents = data;
          this._cdRef.markForCheck();
        }),
      )
      .subscribe();
  }

}
