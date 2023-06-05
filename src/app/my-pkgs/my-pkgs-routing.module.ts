import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPkgsPage } from './my-pkgs.page';

const routes: Routes = [
  {
    path: '',
    component: MyPkgsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPkgsPageRoutingModule {}
