import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'shopping-cart', loadChildren: './components/shopping-cart/shopping-cart.module#ShoppingCartModule'},
  { path: 'product', loadChildren: './components/product/product.module#ProductModule'}   // Code modified
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
