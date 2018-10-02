import { Injectable } from '@angular/core';
import { LocalStorage } from 'ngx-store';
import { ProductsService } from './products.service';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private productsService: ProductsService) { }

  @LocalStorage() shoppingCartProducts: Array<number> = new Array();

  addProduct(productId: number): void {
    this.shoppingCartProducts.indexOf(productId) === -1 ? this.shoppingCartProducts.push(productId) : console.warn("This item already exists");
  }

  removeProduct(productId: number): void {
    this.shoppingCartProducts.splice(this.shoppingCartProducts.findIndex(item => item == productId), 1);
  }

  getProducts(): any {
    
    
    let products = this.productsService.getProducts();
    
    let filt = products.pipe(filter((data: any) => {
     
        const index = this.shoppingCartProducts.includes(data.id);

        return index;
      })
    )

    return filt;


    // products.pipe(
    //     flatMap((data: any) => data),
    //     filter((data: any) => {
       
    //       const index = this.shoppingCartProducts.includes(data.id);

    //       return index;
    //     })
    //   )
  }
}
