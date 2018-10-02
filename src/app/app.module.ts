import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule,
  MatExpansionModule, MatListModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import {BreadcrumbsModule} from "ng6-breadcrumbs";
import {MatBadgeModule} from '@angular/material/badge';
import { Page404Component} from './components/page404-component/page404-component.component';
import { WebStorageModule } from 'ngx-store';
import { CommonModule } from '@angular/common';
import { TruncateModule} from '@yellowspot/ng-truncate';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductListItemComponent } from './components/product/product-list-item/product-list-item.component';
import { GalleryModule } from '@ngx-gallery/core';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductsService } from './services/products.service';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    ShoppingCartComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductListItemComponent
  ],
  imports: [
    MatSnackBarModule,
    MatCardModule,
    MatTableModule,
    GalleryModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    TruncateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatListModule,
    MatBadgeModule,
    BreadcrumbsModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    CommonModule,
    WebStorageModule
  ],
  providers: [
    ShoppingCartService,
    ProductsService
  ],
  bootstrap: [AppComponent]
  , entryComponents: [AppComponent] 
})
export class AppModule { }
