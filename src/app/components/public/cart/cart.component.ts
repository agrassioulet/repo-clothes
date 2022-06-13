import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  selectFormControl = new FormControl('', []);

  message = ''
  cart: any;

  constructor(
    private productService: ProductService,
    public auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getCart()
  }

  getCart() {
    if (this.auth.isUserLogin()) {
      this.productService.getCart().subscribe(result => {
        console.log('cart :', result)
        this.cart = result.data
      })
    }
    else {
      this.message = 'Vous devez vous authentifier pour accéder au panier'
    }
  }

  increaseQuantity(productCart: any) {
    productCart.quantity = productCart.quantity + 1
    this.productService.updateProductCart(productCart).subscribe(result => {
      console.log("increaseQuantity", result)
      this.getCart()
    })
  }

  decreaseQuantity(productCart: any) {
    productCart.quantity = productCart.quantity - 1
    this.productService.updateProductCart(productCart).subscribe(result => {
      console.log("decreaseQuantity", result)
      this.getCart()
    })
  }

  deleteProductCart(productCart: any) {
    productCart.quantity = 0
    this.productService.updateProductCart(productCart).subscribe(result => {
      console.log("decreaseQuantity", result)
      this.getCart()
    })
  }

  order() {
    this._router.navigate(['/delivery-payment']);
  }

}
