import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.getCart()
  }

  getCart() {
    if (this.auth.isUserLogin()) {
      this.productService.getCart().subscribe(result => {
        this.cart = result.data
      })
    }
    else {
      this.message = 'Vous devez vous authentifier pour accéder au panier'
    }
  }

  displaySelect() {
    console.log("displaySelect",this.selectFormControl.value)
  }

  increaseQuantity(productCart: any) {
    productCart.quantity = productCart.quantity + 1
    this.productService.updateProductCart(productCart).subscribe(result => {
      console.log("increaseQuantity", result)
    })
  }

  decreaseQuantity(productCart: any) {
    productCart.quantity = productCart.quantity - 1
    this.productService.updateProductCart(productCart).subscribe(result => {
      console.log("decreaseQuantity", result)
    })
  }

}
