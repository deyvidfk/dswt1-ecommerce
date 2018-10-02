import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { GalleryModule } from '@ngx-gallery/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { MatButtonModule, MatIconModule} from '@angular/material';
@NgModule({
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
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
