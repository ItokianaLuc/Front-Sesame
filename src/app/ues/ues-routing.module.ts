import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UesComponent } from './ues.component';

const routes: Routes = [{ path: '', component: UesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UesRoutingModule { }
