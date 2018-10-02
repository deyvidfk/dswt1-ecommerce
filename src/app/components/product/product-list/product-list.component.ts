import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ProductItem } from '../../../models/ProductItem';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  products: Array<ProductItem> = new Array<ProductItem>();

  ngOnInit() {
    this.productsService.getProducts().subscribe(function (data) {
      this.products = data;
    }.bind(this));
  }
}
