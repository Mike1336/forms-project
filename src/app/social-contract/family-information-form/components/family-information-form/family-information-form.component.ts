import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { tap } from 'rxjs/operators';

import { FamilyInformationFormDialogComponent } from '../family-information-form-dialog/family-information-form-dialog.component';
import { DataService } from '../../services/data.service';
import { IFamilyMember } from '../../interfaces/family-member';

@Component({
  selector: 'family-information-form',
  templateUrl: './family-information-form.component.html',
  styleUrls: ['./family-information-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FamilyInformationFormComponent implements OnInit {

  public form: FormGroup;

  public familyMembersCountCtl = new FormControl(null, [
    Validators.maxLength(2),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    Validators.required,
  ]);
  public familyIncomeCapitalByExecutionCtl = new FormControl(null, [
    Validators.minLength(2),
    Validators.maxLength(15),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    Validators.required,
  ]);
  public familyMembersCountByExecutionCtl = new FormControl(null, [
    Validators.maxLength(2),
    Validators.required,
  ]);
  public familyIncomePerCapitalCtl = new FormControl(null, [
    Validators.minLength(2),
    Validators.maxLength(15),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    Validators.required,
  ]);

  public displayedColumns: string[] = ['add', 'lastname', 'name', 'patronymic', 'snils', 'role', 'headOfFamily', 'menu'];
  public familyMembers: IFamilyMember[];

  constructor(
    private _dataService: DataService,
    private _dialog: MatDialog,
    private _cdRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
    this._initForm();
    this._listenTableData();
  }

  public getForm(): FormGroup {
    if (!this.form) {
      this._initForm();
    }

    return this.form;
  }

  public getTableData(): IFamilyMember[] {
    return this.familyMembers;
  }

  public showDialogToAdd(): void {
    const dialog = this._dialog.open(FamilyInformationFormDialogComponent, {
      data: {
        id: this.familyMembers.length + 1,
      },
    });

    dialog.afterClosed()
      .pipe(
        tap((member: IFamilyMember) => {
          if (!member) {
            return;
          }
          this._dataService.add(member);
        }),
      )
      .subscribe();
  }

  public showDialogToUpdate(member: IFamilyMember): void {
    const dialog = this._dialog.open(FamilyInformationFormDialogComponent, {
      data: {
        ...member,
      },
    });

    dialog.afterClosed()
      .pipe(
        tap((updatedMember: IFamilyMember) => {
          if (!updatedMember) {
            return;
          }
          this._dataService.update(updatedMember);
        }),
      )
      .subscribe();
  }

  public delete(member: IFamilyMember): void {
    this._dataService.delete(member);
  }

  private _initForm(): void {
    this.form = new FormGroup({
      familyMembersCount: this.familyMembersCountCtl,
      familyIncomeCapitalByExecution: this.familyIncomeCapitalByExecutionCtl,
      familyMembersCountByExecution: this.familyMembersCountByExecutionCtl,
      familyIncomePerCapital: this.familyIncomePerCapitalCtl,
    });
  }

  private _listenTableData(): void {
    this._dataService.content$
      .pipe(
        tap((data) => {
          this.familyMembers = data;
          this._cdRef.markForCheck();
        }),
      )
      .subscribe();
  }

}
