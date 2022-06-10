import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { PublicRoutingModule } from './public-routing.module';
import { CartComponent } from './cart/cart.component';
import { DeliveryPaymentComponent } from './delivery-payment/delivery-payment.component';


const Material = [
  MatExpansionModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatSelectModule,
  MatInputModule,
  MatButtonToggleModule,
  MatIconModule
]


@NgModule({
  declarations: [
    ProductListComponent, ProductDetailComponent, CartComponent, DeliveryPaymentComponent
  ],
  imports: [PublicRoutingModule
    ,ReactiveFormsModule,CommonModule,FormsModule,NgbModule,FontAwesomeModule,
    Material
  ]
})
export class PublicModule { }


