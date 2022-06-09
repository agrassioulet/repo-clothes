import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  panelOpenState = false;
  hideSortByMenu: boolean = true
  data: any;
  category: string;

  minPriceFormControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]);
  maxPriceFormControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]);

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    var category = activatedRoute.snapshot.paramMap.get("category")
    this.category = category ?? ""
    console.log("category : ", category)
  }

  ngOnInit(): void {
    this.productService.getProductsByCategory(this.category).subscribe(result => {
      this.data = result
    })
  }

  openFilterSideWindow() {
    var element = document.getElementById("filter_side_window")
    if (element != null) {
      element.style.right = "0"
    }

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
    this.productService.getProductsByCategory(this.category).subscribe(result => {
      this.data = result.filter(
        (product: any) => product.price >= this.minPriceFormControl.value 
        &&  product.price <= this.maxPriceFormControl.value
        )
    })
  }

}
