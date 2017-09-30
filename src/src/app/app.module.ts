import { AppRouteModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { OrderService } from './service/order.service';
import { ProductService } from './service/product.service';
import { AppComponent } from './app.component';
import { ProdIndexComponent } from './components/prod-index/prod-index.component';
import { ProdBookComponent } from './components/prod-book/prod-book.component';
import { ProdToyComponent } from './components/prod-toy/prod-toy.component';
import { ProdBookingComponent } from './components/prod-booking/prod-booking.component';
import { ShopcartComponent } from './components/shopcart/shopcart.component';
import { ProdCreateComponent } from "./components/prod-create/prod-create.component";
import { ProdEditComponent } from './components/prod-edit/prod-edit.component';

import { ToastConfig } from './class/toastr.config';
import { ToastModule, ToastOptions } from "ng2-toastr/ng2-toastr";

import { AngularFireModule } from 'angularfire2';
// import { FirebaseConfigProd } from './class/FirebaseConfig.prod';
import { FirebaseConfig } from './class/FirebaseConfig';


import { shopcartReducer } from './ngrx/shopcart.action';
import { orderReducer } from './ngrx/order.action';
import { orderEffects } from './ngrx/order.effects';
import { LoginComponent } from './components/login/login.component';

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
    ShopcartComponent,
    ProdCreateComponent,
    ProdEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    AngularFireModule.initializeApp(((new FirebaseConfig).config)),
    StoreModule.provideStore(rootReducer),
    EffectsModule.run(orderEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
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
