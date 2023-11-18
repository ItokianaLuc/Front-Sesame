import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcRoutingModule } from './ec-routing.module';
import { EcComponent } from './ec.component';


@NgModule({
  declarations: [
    EcComponent
  ],
  imports: [
    CommonModule,
    EcRoutingModule
  ]
})
export class EcModule { }
