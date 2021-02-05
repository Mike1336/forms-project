import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialContractRoutingModule } from './social-contract-routing.module';
import { SocialContractComponent } from './social-contract.component';
import { BasicInformationModule } from './basic-information/basic-information.module';


@NgModule({
  declarations: [SocialContractComponent],
  imports: [
    CommonModule,
    BasicInformationModule,
    SocialContractRoutingModule,
  ],
})
export class SocialContractModule { }
