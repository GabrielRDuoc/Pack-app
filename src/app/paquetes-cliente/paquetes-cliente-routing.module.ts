import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaquetesClientePage } from './paquetes-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: PaquetesClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaquetesClientePageRoutingModule {}
