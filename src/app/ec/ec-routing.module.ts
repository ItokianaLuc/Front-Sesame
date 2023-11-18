import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcComponent } from './ec.component';

const routes: Routes = [{ path: '', component: EcComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcRoutingModule { }
