import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { GalleryModule } from '@ngx-gallery/core';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    MatTableModule,
    FlexLayoutModule,
    MatButtonModule,
    GalleryModule.forRoot(),
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [ProductDetailComponent]
})
export class ProductModule{ }
