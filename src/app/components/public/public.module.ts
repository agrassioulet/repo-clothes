import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { PublicRoutingModule } from './public-routing.module';
import { CartComponent } from './cart/cart.component';
import { DeliveryPaymentComponent } from './delivery-payment/delivery-payment.component';
import { ConfirmationOrderComponent } from './confirmation-order/confirmation-order.component';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { MatTableModule } from '@angular/material/table';
import { FormatDatePipe } from 'src/app/_pipes/format_date.pipe';


const Material = [
  MatExpansionModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatSelectModule,
  MatInputModule,
  MatButtonToggleModule,
  MatIconModule,
  MatRadioModule,
  MatTableModule
]


@NgModule({
  declarations: [

    FormatDatePipe,

    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    DeliveryPaymentComponent,
    ConfirmationOrderComponent,
    UserInfosComponent,
    SuccessComponent,
    FailureComponent,
    UserOrdersComponent
  ],
  imports: [PublicRoutingModule
    , ReactiveFormsModule, CommonModule, FormsModule, NgbModule, FontAwesomeModule,
    Material
  ]
})

export class PublicModule { }


