import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {

    foods:any[] = [];
	food:any = {};
	foodToEdit:any = {};
	foodToDelete:any = {};
    apiMessage:string;
  constructor(private foodService: FoodserviceService) { }

 ngOnInit() {
	 this.foodService.showAddFoodBox = true;
	  this.foodService.getFoods().subscribe(data =>{
            this.foods = data.Foods;
        });

  }
 AddFood(food:any):void{
    if(!food){ return; }
    this.foodService.createFood(food)
                    .subscribe(data => {
                      console.log(data);
                      this.foods.push(data.food);
                    })
  }
  showEditFood(food:any):void{
    this.foodToEdit = food;
    this.apiMessage = "";
  }

  EditFood(food:any):void{
    if(!food){ return; }
    food.id = this.foodToEdit._id;
    this.foodService.updateFood(food)
                    .subscribe(data => {
                      const updatedFoods = this.foods.map(t => {
                        if(data.food._id !== t._id){
                          return t;
                        }
                        return { ...t, ...data.food };
                      })
                      this.apiMessage = data.message;
                      this.foods = updatedFoods;
                    })
  }
  
  showDeleteFood(food:any):void{
   this.foodToDelete = food;
   this.apiMessage = "";
 }
 
  DeleteFood(food:any):void{
   if(!food){ return; }
   this.foodService.deleteFood(food)
                   .subscribe(data => {
                     const filteredFoods = this.foods.filter(t => t._id !== data.todo._id);
                     this.apiMessage = data.message;
                     this.foods = filteredFoods;
                   })
 }
}
