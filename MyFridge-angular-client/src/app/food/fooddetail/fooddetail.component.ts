import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-fooddetail',
  templateUrl: './fooddetail.component.html',
  styleUrls: ['./fooddetail.component.css']
})
export class FooddetailComponent implements OnInit {

  food:any[]=[];
  constructor(
    private foodService:FoodserviceService,
    private route:ActivatedRoute,
    private location:Location
   ) 
   { }
   ngOnInit():void {
    this.route.paramMap
        .switchMap((params:ParamMap) => this.foodService.getFood(params.get('id')))
        .subscribe(td => this.food =  td.Food[0])
  }
   goBack() {
    this.location.back();
  }

}
