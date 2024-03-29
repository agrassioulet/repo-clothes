import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../_models/product';
import { environment } from '../../environments/environment';
import { ICart } from '../_models/cart';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environment.URL_BACKEND + '/product'
  constructor(private httpClient: HttpClient) {
  }

  public getAllProducts() {
    return this.httpClient.get<IProduct[]>(this.url);
  }

  public getProductById(id: string): Observable<any> {
    return this.httpClient.get<any>(this.url + '/get-product-by-id' + '/' + id);
  }

  public getProductsByCategory(category: string): Observable<any> {
    return this.httpClient.get<any>(this.url + '/get-products-by-category' + '/' + category);
  }

  public createProduct(product: any): Observable<void> {
    return this.httpClient.post<void>(this.url, product)
  }

  public addProductToCart(product: IProduct, quantity: number) {
    return this.httpClient.post<{status: number, data: any}>(this.url + '/add-product-to-cart', 
    { id_product: product._id, quantity: quantity })
  }

  public getCart() {
    return this.httpClient.get<any>(this.url + '/get-cart');
  }

  public updateProductCart(productCart: any) {
    return this.httpClient.post<any>(this.url + '/update-product-cart', productCart);
  }

  public orderCart() {
    return this.httpClient.get<{status: Number, data: any}>(this.url + '/order-cart');
  }

  public getAllCarts() {
    return this.httpClient.get<{status: Number, data: any}>(this.url + '/get-all-sent-carts');
  }

}
