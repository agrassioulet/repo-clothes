import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-confirmation-order',
  templateUrl: './confirmation-order.component.html',
  styleUrls: ['./confirmation-order.component.css']
})
export class ConfirmationOrderComponent implements OnInit {

  refClient: String = ''
  isOrderSaved: Boolean = false

  constructor(
    public auth: AuthService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.orderCart().subscribe(result => {

      console.log(result)

      if (result.status == 1) {
        this.refClient = result.data.client_ref
        this.isOrderSaved = true
      }
    })


  }

}
