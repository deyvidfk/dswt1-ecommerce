import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { Page404Component } from './components/page404-component/page404-component.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';

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
    path: 'shopping-cart', component: ShoppingCartComponent,
    data: {
      breadcrumb: '/ Carrinho de compras'
    }
  },
  {
    path: 'product/:id', component: ProductDetailComponent,
    data: {
      breadcrumb: '/ Produto'
    }
  },
  { path:'**',component:Page404Component}   // Code modified
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
