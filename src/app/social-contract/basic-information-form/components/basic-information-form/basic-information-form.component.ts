import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'basic-information-form',
  templateUrl: './basic-information-form.component.html',
  styleUrls: ['./basic-information-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInformationFormComponent implements OnInit {

  public form: FormGroup;

  public documentNumberCtl = new FormControl(null, [
    Validators.maxLength(40),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    Validators.required,
  ]);
  public dateOfContractCtl = new FormControl(null);
  public dateEndCtl = new FormControl(null);
  public totalAmountCtl = new FormControl(null, [
    Validators.minLength(2),
    Validators.maxLength(15),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    Validators.required,
  ]);
  public payOutAmountCtl = new FormControl(null, [
    Validators.minLength(2),
    Validators.maxLength(15),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    Validators.required,
  ]);
  public payoffAmountCtl = new FormControl(null, [
    Validators.minLength(2),
    Validators.maxLength(15),
    Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    Validators.required,
  ]);
  public socialAssistanceKindCtl = new FormControl(null, [
    Validators.maxLength(100),
    Validators.required,
  ]);
  public contractSubjectCtl = new FormControl(null, [
    Validators.maxLength(500),
    Validators.required,
  ]);

  public toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

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
      documentNumber: this.documentNumberCtl,
      dateOfContract: this.dateOfContractCtl,
      dateEnd: this.dateEndCtl,
      totalAmount: this.totalAmountCtl,
      payOut: this.payOutAmountCtl,
      payoffAmount: this.payoffAmountCtl,
      socialAssistanceKind: this.socialAssistanceKindCtl,
      contractSubject: this.contractSubjectCtl,
    });
  }

}
