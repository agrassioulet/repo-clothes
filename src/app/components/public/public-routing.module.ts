import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../shared/layout/layout.component';
import { CartComponent } from './cart/cart.component';
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
