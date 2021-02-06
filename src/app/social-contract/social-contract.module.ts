import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import { SocialContractRoutingModule } from './social-contract-routing.module';
import { SocialContractComponent } from './components/social-contract/social-contract.component';
import { BasicInformationModule } from './basic-information/basic-information.module';
import { ContractExecutionModule } from './contract-execution/contract-execution.module';
import { ContractTerminationModule } from './contract-termination/contract-termination.module';
import { ExecutionResultModule } from './execution-result/execution-result.module';
import { FamilyInformationModule } from './family-information/family-information.module';
import { SocialAdaptationModule } from './social-adaptation/social-adaptation.module';


@NgModule({
  declarations: [SocialContractComponent],
  imports: [
    // Angular
    CommonModule,
    // Angular Material
    MatCardModule,
    MatExpansionModule,
    // Own
    SocialContractRoutingModule,
    BasicInformationModule,
    FamilyInformationModule,
    SocialAdaptationModule,
    ContractExecutionModule,
    ContractTerminationModule,
    ExecutionResultModule,
  ],
})
export class SocialContractModule { }
