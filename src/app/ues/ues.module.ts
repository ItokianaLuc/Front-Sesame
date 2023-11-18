import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UesRoutingModule } from './ues-routing.module';
import { UesComponent } from './ues.component';
import { ListUeComponent } from './list-ue/list-ue.component';


@NgModule({
  declarations: [
    UesComponent,
    ListUeComponent
  ],
  imports: [
    CommonModule,
    UesRoutingModule
  ]
})
export class UesModule { }
