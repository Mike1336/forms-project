import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SocialContractComponent } from './components/social-contract/social-contract.component';

const routes: Routes = [
  {
    path: '',
    component: SocialContractComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialContractFormRoutingModule { }
