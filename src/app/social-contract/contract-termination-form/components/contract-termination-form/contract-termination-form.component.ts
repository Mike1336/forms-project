import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contract-termination-form',
  templateUrl: './contract-termination-form.component.html',
  styleUrls: ['./contract-termination-form.component.scss'],
})
export class ContractTerminationFormComponent implements OnInit {

  public form: FormGroup;

  public terminationDateCtl = new FormControl(null, [
    Validators.required,
  ]);

  public terminationInitiatorCtl = new FormControl(null, [
    Validators.maxLength(30),
    Validators.required,
  ]);

  public moratoriumPeriodCtl = new FormControl(null, [
    Validators.required,
  ]);

  public isUnscrupulousExecutionCtl = new FormControl(false);

  public terminationReasonCtl = new FormControl(null, [
    Validators.maxLength(100),
    Validators.required,
  ]);


  constructor() { }

  public ngOnInit(): void {
    this._initForm();
  }

  public getForm(): FormGroup {
    if (!this.form) {
      this._initForm();
    }

    return this.form;
  }

  private _initForm(): void {
    this.form = new FormGroup({
      terminationDate: this.terminationDateCtl,
      terminationInitiator: this.terminationInitiatorCtl,
      moratoriumPeriod: this.moratoriumPeriodCtl,
      isUnscrupulousExecution: this.isUnscrupulousExecutionCtl,
      terminationReason: this.terminationReasonCtl,
    });
  }

}
