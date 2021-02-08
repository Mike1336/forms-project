import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'basic-information-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {

  @Input()
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

  private _initForm(): void {
    this.form.setControl('documentNumber', this.documentNumberCtl);
    this.form.setControl('dateOfContract', this.dateOfContractCtl);
    this.form.setControl('dateEnd', this.dateEndCtl);
    this.form.setControl('totalAmount', this.totalAmountCtl);
    this.form.setControl('payOutAmount', this.payOutAmountCtl);
    this.form.setControl('payoffAmount', this.payoffAmountCtl);
    this.form.setControl('socialAssistanceKind', this.socialAssistanceKindCtl);
    this.form.setControl('contractSubject', this.contractSubjectCtl);
  }

}
