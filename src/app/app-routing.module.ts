import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contract',
    loadChildren: () => import('./social-contract/social-contract.module').then((m) => m.SocialContractModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contract',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
