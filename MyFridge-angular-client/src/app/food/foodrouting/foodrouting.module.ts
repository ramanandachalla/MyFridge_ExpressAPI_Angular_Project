import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FoodlistComponent } from '../foodlist/foodlist.component'
import { FooddetailComponent } from '../fooddetail/fooddetail.component'

const foodRoutes: Routes = [
  { path:'foods', component:FoodlistComponent },
  { path:'food/:id', component:FooddetailComponent }
]

@NgModule({
  exports: [
    RouterModule
  ],
  declarations: [],
  imports: [
    CommonModule,
	RouterModule.forChild(foodRoutes)
  ]
})
export class FoodroutingModule { }
