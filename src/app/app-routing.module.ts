import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { AddsesamienComponent } from './addsesamien/addsesamien.component';
import { AdduserComponent } from './adduser/adduser.component';


const routes: Routes = [
 {path : '',redirectTo:'login',pathMatch:'full'},
 {path:'login',component:LoginComponent},
 {path:'home', component:HomepageComponent},
 {path:'addsesamien',component: AddsesamienComponent},
 {path:'adduser',component:AdduserComponent},
 { path: 'ues', loadChildren: () => import('./ues/ues.module').then(m => m.UesModule) },
 { path: 'ec', loadChildren: () => import('./ec/ec.module').then(m => m.EcModule) },
 {path:'**',component: NotfoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
