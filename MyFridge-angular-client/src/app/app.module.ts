import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { FoodserviceService } from './food/foodservice.service';

import { AppRoutingModule } from './app-routing.module';
import { FoodroutingModule } from './food/foodrouting/foodrouting.module';

import { AppComponent } from './app.component';
import { MyhomeComponent } from './food/myhome/myhome.component';
import { FoodlistComponent } from './food/foodlist/foodlist.component';
import { FooddetailComponent } from './food/fooddetail/fooddetail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyhomeComponent,
    FoodlistComponent,
	FooddetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FoodroutingModule,
	 FormsModule
  ],
  providers: [ FoodserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
