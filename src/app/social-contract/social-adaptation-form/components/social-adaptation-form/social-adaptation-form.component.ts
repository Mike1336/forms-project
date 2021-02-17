import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { tap } from 'rxjs/operators';

import { DataService } from '../../services/data.service';
import { SocialAdaptationFormDialogComponent } from '../social-adaptation-form-dialog/social-adaptation-form-dialog.component';
import { ISocialEvent } from '../../interfaces/social-event';


@Component({
  selector: 'social-adaptation-form',
  templateUrl: './social-adaptation-form.component.html',
  styleUrls: ['./social-adaptation-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialAdaptationFormComponent implements OnInit {

  public displayedColumns: string[] = ['add', 'name', 'plannedExecutionDate', 'money', 'socialPartner', 'controlOpinion', 'menu'];
  public socialEvents: ISocialEvent[];

  constructor(
    private _dataService: DataService,
    private _dialog: MatDialog,
    private _cdRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this._listenTableData();
  }

  public showDialog(): void {
    this._dialog.open(SocialAdaptationFormDialogComponent);
  }

  public getTableData(): ISocialEvent[] {
    return this.socialEvents;
  }

  public showDialogToAdd(): void {
    const dialog = this._dialog.open(SocialAdaptationFormDialogComponent, {
      data: {
        id: this.socialEvents.length + 1,
      },
    });

    dialog.afterClosed()
      .pipe(
        tap((event: ISocialEvent) => {
          if (!event) {
            return;
          }
          this._dataService.add(event);
        }),
      )
      .subscribe();
  }

  public showDialogToUpdate(event: ISocialEvent): void {
    const dialog = this._dialog.open(SocialAdaptationFormDialogComponent, {
      data: {
        ...event,
      },
    });

    dialog.afterClosed()
      .pipe(
        tap((updatedEvent: ISocialEvent) => {
          if (!updatedEvent) {
            return;
          }
          this._dataService.update(updatedEvent);
        }),
      )
      .subscribe();
  }

  public delete(event: ISocialEvent): void {
    this._dataService.delete(event);
  }

  private _listenTableData(): void {
    this._dataService.content$
      .pipe(
        tap((data) => {
          this.socialEvents = data;
          this._cdRef.markForCheck();
        }),
      )
      .subscribe();
  }

}
