import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ProductService } from 'src/app/_services/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  resultBuying: ResultType = ''
  numberQuantityFormControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]);
  id: string;
  product: any;
  selectedSize!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private auth: AuthService,
    private router: Router
  ) {
    var id = this.activatedRoute.snapshot.paramMap.get("id")
    this.id = id ?? ""
    console.log("id : ", id)
  }

  ngOnInit(): void {
    this.productService.getProductById(this.id).subscribe(result => {
      console.log("result", result)
      this.product = result
    })
  }

  addProductToCart() {
    if (this.auth.isUserLogin()) {
      this.productService.addProductToCart(this.product, this.numberQuantityFormControl.value).subscribe(result => {
        console.log("addProductToCart", result)
        if (result.status == 1) {
          this.resultBuying = 'productAdded'
          this.numberQuantityFormControl.reset()
          setTimeout(() => {
            this.resultBuying = ''
          }, 2000);
        }
      })
    }
    else {
      this.resultBuying = "authentificationNeeded"
    }

  }
}


type ResultType = '' | 'authentificationNeeded' | 'productAdded';
