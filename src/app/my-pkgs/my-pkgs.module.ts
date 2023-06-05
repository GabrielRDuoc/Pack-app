import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPkgsPageRoutingModule } from './my-pkgs-routing.module';

import { MyPkgsPage } from './my-pkgs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPkgsPageRoutingModule
  ],
  declarations: [MyPkgsPage]
})
export class MyPkgsPageModule {}
