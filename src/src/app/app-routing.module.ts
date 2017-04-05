import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShopcartComponent } from './components/shopcart/shopcart.component';
import { ProdToyComponent } from './components/prod-toy/prod-toy.component';
import { ProdBookComponent } from './components/prod-book/prod-book.component';
import { ProdIndexComponent } from './components/prod-index/prod-index.component';
import { ProdCreateComponent } from './components/prod-create/prod-create.component';

const routes: Routes = [
  {
    path: 'Product/Index', component: ProdIndexComponent,
    children: [
      { path: 'Books', component: ProdBookComponent },
      { path: 'Toys', component: ProdToyComponent }
    ]
  },
  { path: 'Product/Shopcart', component: ShopcartComponent },
  { path: 'Product/Create', component: ProdCreateComponent },
  { path: '', redirectTo: 'Product/Index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRouteModule { }
