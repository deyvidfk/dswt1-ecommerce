import { Component, OnInit, Input } from '@angular/core';

export interface ProductItem{
  name:string;
  description:string;
  value:any;
  id:number;
  imageUrl:string;
  author:string
}

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
