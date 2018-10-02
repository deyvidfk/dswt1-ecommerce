import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { ProductItem } from '../../../models/ProductItem';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { ProductsService } from '../../../services/products.service';
export interface ProductDescriptExtraElement {
  key: string;
  value: string;
}

const ELEMENT_DATA: ProductDescriptExtraElement[] = [
  { key: 'Marca', value: 'Hydrogen' },
  { key: 'Modelo', value: 'Hydrogen' },
  { key: 'Linha', value: 'Hydrogen' },
  { key: 'Dimensões', value: 'Hydrogen' },
  { key: 'Peso', value: 'Hydrogen' },
  { key: 'Descrição', value: 'Hydrogen' }
];


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  constructor(private shoppingCartService:ShoppingCartService, private productsService: ProductsService, private router: Router, private route: ActivatedRoute,private snackBar: MatSnackBar) { }

  product: ProductItem;


  images: GalleryItem[];

  displayedColumns: string[] = ['key', 'value'];
  dataSource = ELEMENT_DATA;


  addProductToShoppingCart(){
    debugger
    this.shoppingCartService.addProduct(this.product.id);    
    this.snackBar.open('Produto adicionado ao carrinho', '', { duration: 3000 });
    this.router.navigate(['shopping-cart']);
  }

  ngOnInit() {

    this.route.params.pipe(switchMap((params: Params) => {
    
      return this.productsService.getProduct(Number(params['id']));
    }))
      .subscribe(function (data) {
    
        this.product = data;

        this.images = data.images.map((imageUrl) => {
          return new ImageItem({ src: imageUrl, thumb: imageUrl });
        });

      }.bind(this));
  }
}
