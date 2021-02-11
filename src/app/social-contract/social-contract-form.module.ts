import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SocialContractFormRoutingModule } from './social-contract-form-routing.module';
import { BasicInformationFormModule } from './basic-information-form/basic-information-form.module';
import { ContractExecutionFormModule } from './contract-execution-form/contract-execution-form.module';
import { FamilyInformationFormModule } from './family-information-form/family-information-form.module';
import { SocialAdaptationFormModule } from './social-adaptation-form/social-adaptation-form.module';
import { ExecutionResultFormModule } from './execution-result-form/execution-result-form.module';
import { ContractTerminationFormModule } from './contract-termination-form/contract-termination-form.module';
import { SocialContractComponent } from './components/social-contract/social-contract.component';
import { PaymentsInformationFormModule } from './payments-information-form/payments-information-form.module';
import { ContractCorrectionFormModule } from './contract-correction-form/contract-correction-form.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    SocialContractComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    // Angular Material
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    // Own
    SocialContractFormRoutingModule,
    BasicInformationFormModule,
    FamilyInformationFormModule,
    SocialAdaptationFormModule,
    ContractExecutionFormModule,
    ContractTerminationFormModule,
    PaymentsInformationFormModule,
    ContractCorrectionFormModule,
    ExecutionResultFormModule,
  ],
})
export class SocialContractFormModule { }
