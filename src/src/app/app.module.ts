import { AppRouteModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { OrderService } from './service/order.service';
import { ProductService } from './service/product.service';

import { AppComponent } from './app.component';
import { ProdIndexComponent } from './components/prod-index/prod-index.component';
import { ProdBookComponent } from './components/prod-book/prod-book.component';
import { ProdToyComponent } from './components/prod-toy/prod-toy.component';
import { ProdBookingComponent } from './components/prod-booking/prod-booking.component';
import { ShopcartComponent } from './components/shopcart/shopcart.component';

import { ToastConfig } from './class/toastr.config';
import { ToastModule, ToastOptions } from "ng2-toastr/ng2-toastr";

import { shopcartReducer } from './ngrx/shopcart.action';
import { orderReducer } from './ngrx/order.action';
import { orderEffects } from './ngrx/order.effects';

let rootReducer: any = {
    shopcart: shopcartReducer,
    order: orderReducer
}


@NgModule({
  declarations: [
    AppComponent,
    ProdIndexComponent,
    ProdBookComponent,
    ProdToyComponent,
    ProdBookingComponent,
    ShopcartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    StoreModule.provideStore(rootReducer),
    EffectsModule.run(orderEffects),
    AppRouteModule
  ],
  providers: [
    ProductService,
    OrderService,
    {provide: ToastOptions, useClass: ToastConfig},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
