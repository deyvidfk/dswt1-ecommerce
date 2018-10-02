import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from '../../../models/ProductItem';



@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.sass']
})
export class ProductListItemComponent implements OnInit {

  @Input()
  product:ProductItem;

  constructor() { }


  ngOnInit() {
  }
}
