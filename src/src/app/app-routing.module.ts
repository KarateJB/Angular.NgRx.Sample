import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    { path: 'Product/Index', component: ProdIndexComponent },
    { path: 'Product/Shopcart', component: ShopcartComponent },
    {
        path: 'Basic/Product/Sub',
        component: ProdGroupComponent,
        children: [
            { path: 'Books', component: ProdBookComponent },
            { path: 'Toys', component:  ProdToyComponent }
        ]
    },
    { path: '', redirectTo: '/Basic/Product/Index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRouteModule { }
