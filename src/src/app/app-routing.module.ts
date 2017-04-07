import { ProdEditComponent } from './components/prod-edit/prod-edit.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShopcartComponent } from './components/shopcart/shopcart.component';
import { ProdToyComponent } from './components/prod-toy/prod-toy.component';
import { ProdBookComponent } from './components/prod-book/prod-book.component';
import { ProdIndexComponent } from './components/prod-index/prod-index.component';
import { ProdCreateComponent } from './components/prod-create/prod-create.component';

const routes: Routes = [
  {path:'Login', component: LoginComponent},
  {
    path: 'Product/Index', component: ProdIndexComponent,
    children: [
      { path: 'Books', component: ProdBookComponent },
      { path: 'Toys', component: ProdToyComponent }
    ]
  },
  { path: 'Product/Shopcart', component: ShopcartComponent },
  { path: 'Product/Create', component: ProdCreateComponent },
  { path: 'Product/Edit/:id', component: ProdEditComponent },
  { path: '', redirectTo: 'Login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRouteModule { }
