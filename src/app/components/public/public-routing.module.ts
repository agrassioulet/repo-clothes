import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmationOrderComponent } from './confirmation-order/confirmation-order.component';
import { DeliveryPaymentComponent } from './delivery-payment/delivery-payment.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path:'cart', component: CartComponent
    },
    {
        path:'delivery-payment', component: DeliveryPaymentComponent
    },
    {
        path:'confirmation-order', component: ConfirmationOrderComponent
    },
    {
        path: 'product-list/:category/:subcategory', component: ProductListComponent
    },
    {
        path:'product-detail/:id', component:ProductDetailComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule { }
