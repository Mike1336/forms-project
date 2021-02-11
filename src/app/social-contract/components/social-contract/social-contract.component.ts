import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BasicInformationFormComponent } from '../../basic-information-form/components/basic-information-form/basic-information-form.component';
import { FamilyInformationFormComponent } from '../../family-information-form/components/family-information-form/family-information-form.component';
import { SocialAdaptationFormComponent } from '../../social-adaptation-form/components/social-adaptation-form/social-adaptation-form.component';
import { PaymentsInformationFormComponent } from '../../payments-information-form/components/payments-information-form/payments-information-form.component';
import { ContractExecutionFormComponent } from '../../contract-execution-form/components/contract-execution-form/contract-execution-form.component';
import { ContractTerminationFormComponent } from '../../contract-termination-form/components/contract-termination-form/contract-termination-form.component';
import { ExecutionResultFormComponent } from '../../execution-result-form/components/execution-result-form/execution-result-form.component';
import { ContractCorrectionFormComponent } from '../../contract-correction-form/components/contract-correction-form/contract-correction-form.component';

@Component({
  templateUrl: './social-contract.component.html',
  styleUrls: ['./social-contract.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialContractComponent implements OnInit {

  @ViewChild(BasicInformationFormComponent)
  public basicInformation: BasicInformationFormComponent;

  @ViewChild(FamilyInformationFormComponent)
  public familyInformation: FamilyInformationFormComponent;

  @ViewChild(SocialAdaptationFormComponent)
  public socialAdaptation: SocialAdaptationFormComponent;

  @ViewChild(PaymentsInformationFormComponent)
  public paymentsInformation: PaymentsInformationFormComponent;

  @ViewChild(ContractExecutionFormComponent)
  public contractExecution: ContractExecutionFormComponent;

  @ViewChild(ContractTerminationFormComponent)
  public contractTermination: ContractTerminationFormComponent;

  @ViewChild(ContractCorrectionFormComponent)
  public contractCorrection: ContractCorrectionFormComponent;

  @ViewChild(ExecutionResultFormComponent)
  public executionResult: ExecutionResultFormComponent;

  public get basicInformationForm(): FormGroup {
    return this.basicInformation?.getForm();
  }

  constructor() { }

  public ngOnInit(): void {
  }

}
