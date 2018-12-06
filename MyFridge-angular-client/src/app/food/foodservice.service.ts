import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  private apiUrl = '/api/';
  showAddFoodBox:boolean = true;
  constructor(private http: HttpClient){ }
  
  getFoods():Observable<any> {
      return this.http.get<any>(this.apiUrl);
  }
  getFood(id:string):Observable<any> {
      return this.http.get<any>(this.apiUrl + id);
  }
  createFood(food:any): Observable<any>{
    return this.http.post(this.apiUrl, food);
  }
  updateFood(food:any):Observable<any>{
    return this.http.put(this.apiUrl, food);
  }
  deleteFood(food:any):Observable<any>{
    return this.http
               .delete(this.apiUrl + food._id);
  }
}
