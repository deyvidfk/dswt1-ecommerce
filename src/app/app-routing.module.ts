import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home',
    data: {
      breadcrumb: '/ Home'
    }
  },
  {
    path: 'home', component: HomeComponent,
    data: {
      breadcrumb: '/ Home'
    }
  },
  {
    path: 'shopping-cart', loadChildren: './components/shopping-cart/shopping-cart.module#ShoppingCartModule',
    data: {
      breadcrumb: '/ Carrinho de compras'
    }
  },
  {
    path: 'product/:id', loadChildren: './components/product/product.module#ProductModule',
    data: {
      breadcrumb: '/ Produto'
    }
  }   // Code modified
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
