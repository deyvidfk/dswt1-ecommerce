import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ProductsService } from '../../services/products.service';
import { LocalStorage } from 'ngx-store';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService, private productsService: ProductsService) { }

  products: Array<any>;

  @LocalStorage() shoppingCartProducts: Array<number> = new Array();

  
  ngOnInit() {

    debugger
    const items = this.productsService.getProducts().subscribe(data =>{

      let filt = data.filter((data: any) => {
     
        const index = this.shoppingCartProducts.includes(data.id);

        return index;
      })

      this.products = filt;

    });
  }
}
