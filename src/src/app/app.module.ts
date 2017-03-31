import { ToastConfig } from './class/toastr.config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProdIndexComponent } from './components/prod-index/prod-index.component';
import { ProdBookComponent } from './components/prod-book/prod-book.component';
import { ProdToyComponent } from './components/prod-toy/prod-toy.component';
import { ProdBookingComponent } from './components/prod-booking/prod-booking.component';
import { ToastModule,ToastOptions } from "ng2-toastr/ng2-toastr";

@NgModule({
  declarations: [
    AppComponent,
    ProdIndexComponentComponent,
    ProdBookComponent,
    ProdBookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
  ],
  providers: [
    {provide: ToastOptions, useClass: ToastConfig},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
