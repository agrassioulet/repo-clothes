import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  panelOpenState = false;
  hideSortByMenu: boolean = true
  data: Product[] = [];
  category: string;

  minPriceFormControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]);
  maxPriceFormControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]);

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    var category = this.activatedRoute.snapshot.paramMap.get("category")
    this.category = category ?? ""
  }

  ngOnInit(): void {
    this.productService.getProductsByCategory(this.category).subscribe(result => {
      console.log(result)
      this.data = result
      console.log(this.data)
    })
  }

  openFilterSideWindow() {
    var element = document.getElementById("filter_side_window")
    if (element != null) {
      element.style.right = "0"
    }
    this.resetFilterFields()
  }

  closeFilterSideWindow() {
    var element = document.getElementById("filter_side_window")
    if (element != null) {
      element.style.right = "-50vw"
    }
  }

  getProductDetail(product: any) {
    this.router.navigate(['product-detail/' + product._id])
  }

  filterPrice() {
    console.log('min price', this.minPriceFormControl.value)
    console.log('max price', this.maxPriceFormControl.value)

    var minVal = this.minPriceFormControl.value == null ? 0 : this.minPriceFormControl.value
    var maxVal = this.maxPriceFormControl.value == null ? Infinity : this.maxPriceFormControl.value


    console.log('min price post', minVal)
    console.log('max price post', maxVal)

    
    this.productService.getProductsByCategory(this.category).subscribe(result => {
      this.data = result.filter(
        (product: Product) => product.price >= minVal 
        &&  product.price <= maxVal
        )
    })
    console.log("data", this.data)
  }


  sort(type: string) {
    if(type == 'ascending') {
      this.data = this.data.sort((product1, product2) => {
        return product1.price <= product2.price ? -1 : 1
      })
    }
    else if (type == 'descending') {
      this.data = this.data.sort((product1, product2) => {
        return product1.price >= product2.price ? -1 : 1
      })
    }
    this.hideSortByMenu=!this.hideSortByMenu
  }

  resetFilterFields() {
    this.minPriceFormControl.reset()
    this.maxPriceFormControl.reset()
  }

}
