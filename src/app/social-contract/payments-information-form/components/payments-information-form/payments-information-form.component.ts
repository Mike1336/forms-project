import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { tap } from 'rxjs/operators';

import { PaymentsInformationFormDialogComponent } from '../payments-information-form-dialog/payments-information-form-dialog.component';
import { IPayment } from '../../interfaces/payment';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'payments-information-form',
  templateUrl: './payments-information-form.component.html',
  styleUrls: ['./payments-information-form.component.scss'],
})
export class PaymentsInformationFormComponent implements OnInit {

  public displayedColumns: string[] = ['add', 'date', 'amount', 'event', 'description', 'payedOut', 'menu'];
  public payments: IPayment[];

  constructor(
    private _dataService: DataService,
    private _dialog: MatDialog,
    private _cdRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this._listenTableData();
  }

  public getTableData(): IPayment[] {
    return this.payments;
  }

  public showDialogToAdd(): void {
    const dialog = this._dialog.open(PaymentsInformationFormDialogComponent, {
      data: {
        id: this.payments.length + 1,
      },
    });

    dialog.afterClosed()
      .pipe(
        tap((payment: IPayment) => {
          if (!payment) {
            return;
          }
          this._dataService.add(payment);
        }),
      )
      .subscribe();
  }

  public showDialogToUpdate(payment: IPayment): void {
    const dialog = this._dialog.open(PaymentsInformationFormDialogComponent, {
      data: {
        ...payment,
      },
    });

    dialog.afterClosed()
      .pipe(
        tap((updatedPayment: IPayment) => {
          if (!updatedPayment) {
            return;
          }
          this._dataService.update(updatedPayment);
        }),
      )
      .subscribe();
  }

  public delete(payment: IPayment): void {
    this._dataService.delete(payment);
  }

  private _listenTableData(): void {
    this._dataService.content$
      .pipe(
        tap((data) => {
          this.payments = data;
          this._cdRef.markForCheck();
        }),
      )
      .subscribe();
  }

}
