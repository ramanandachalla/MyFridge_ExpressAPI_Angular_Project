import { Component } from '@angular/core';
import { FoodserviceService } from './food/foodservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyFridge-angular-client';
  constructor(private foodService:FoodserviceService) { }

  showAddFoodBox(e):void{
    e.preventDefault();
    this.foodService.showAddFoodBox = !this.foodService.showAddFoodBox;
  }
}
