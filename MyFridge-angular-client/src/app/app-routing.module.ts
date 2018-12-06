import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyhomeComponent } from './food/myhome/myhome.component';

const routes: Routes = [
  { path: '', redirectTo: '/myhome', pathMatch: 'full' },
  { path: 'myhome', component: MyhomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
