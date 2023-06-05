import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaquetesClientePageRoutingModule } from './paquetes-cliente-routing.module';

import { PaquetesClientePage } from './paquetes-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaquetesClientePageRoutingModule
  ],
  declarations: [PaquetesClientePage]
})
export class PaquetesClientePageModule {}
