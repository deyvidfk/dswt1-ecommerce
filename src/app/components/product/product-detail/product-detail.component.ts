import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

export interface ProductDescriptExtraElement {
  key: string;
  value: string;
}

const ELEMENT_DATA: ProductDescriptExtraElement[] = [
  {key: 'Marca', value: 'Hydrogen'},
  {key: 'Modelo',value: 'Hydrogen'},
  {key: 'Linha', value: 'Hydrogen'},
  {key: 'Dimensões', value: 'Hydrogen'},
  {key: 'Peso', value: 'Hydrogen'},
  {key: 'Descrição', value: 'Hydrogen'}
];


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }
  images: GalleryItem[];

  displayedColumns: string[] = ['key', 'value'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
       // Set gallery items array
       this.images = [
        new ImageItem({ src: 'https://images-americanas.b2w.io/produtos/01/00/item/133797/4/133797404_2SZ.jpg', thumb: 'https://images-americanas.b2w.io/produtos/01/00/item/133797/4/133797404_2SZ.jpg' }),
        new ImageItem({ src: 'https://images-americanas.b2w.io/produtos/01/00/item/133797/4/133797404_2SZ.jpg', thumb: 'https://images-americanas.b2w.io/produtos/01/00/item/133797/4/133797404_2SZ.jpg' }),
        new ImageItem({ src: 'https://images-americanas.b2w.io/produtos/01/00/item/133797/4/133797404_2SZ.jpg', thumb: 'https://images-americanas.b2w.io/produtos/01/00/item/133797/4/133797404_2SZ.jpg' }),
        new ImageItem({ src: 'https://images-americanas.b2w.io/produtos/01/00/item/133797/4/133797404_2SZ.jpg', thumb: 'https://images-americanas.b2w.io/produtos/01/00/item/133797/4/133797404_2SZ.jpg' }),
        new ImageItem({ src: 'https://images-americanas.b2w.io/produtos/01/00/item/133797/4/133797404_2SZ.jpg', thumb: 'https://images-americanas.b2w.io/produtos/01/00/item/133797/4/133797404_2SZ.jpg' }),
        new ImageItem({ src: 'https://images-americanas.b2w.io/produtos/01/00/item/133797/4/133797404_2SZ.jpg', thumb: 'https://images-americanas.b2w.io/produtos/01/00/item/133797/4/133797404_2SZ.jpg' }),
        // ... more items
      ];
  }

}
