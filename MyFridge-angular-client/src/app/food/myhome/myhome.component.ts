import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.css']
})
export class MyhomeComponent implements OnInit {

  foods:any[] = [];
  constructor(private foodService: FoodserviceService) { }

  ngOnInit() {
	  this.foodService.getFoods().subscribe(data =>{
            this.foods = data.Foods;
        });

  }
}
