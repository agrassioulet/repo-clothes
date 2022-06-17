import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmationOrderComponent } from './confirmation-order/confirmation-order.component';
import { DeliveryPaymentComponent } from './delivery-payment/delivery-payment.component';
import { FailureComponent } from './failure/failure.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { SuccessComponent } from './success/success.component';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'user-infos', component: UserInfosComponent
    },
    {
        path: 'cart', component: CartComponent
    },
    {
        path: 'delivery-payment', component: DeliveryPaymentComponent
    },
    {
        path: 'confirmation-order', component: ConfirmationOrderComponent
    },
    {
        path: 'product-list/:category/:subcategory', component: ProductListComponent
    },
    {
        path: 'product-detail/:id', component: ProductDetailComponent
    },

    { path: 'delivery-payment/success', component: ConfirmationOrderComponent },
    { path: 'delivery-payment/failure', component: FailureComponent },

    {path: 'user-orders', component: UserOrdersComponent}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule { }
