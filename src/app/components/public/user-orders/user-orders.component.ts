import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { Cart, ICart } from 'src/app/_models/cart';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {
  private carts!: ICart[];

  ELEMENT_DATA: any[] = []
    // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // ];

  displayedColumns: string[] = [ 'ref_client', 'status', 'order_date'];
  // public dataSource = this.ELEMENT_DATA;



  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    console.log('in ngoninit')
    this.productService.getAllCarts().subscribe(result => {
      console.log('in productService.getAllCarts')
      if(result.status == 1) {
        this.carts = result.data
        this.ELEMENT_DATA = []

        this.carts.forEach( (cart, index)  => {
          this.ELEMENT_DATA.push({position: index + 1, ref_client: cart.client_ref, status: cart.status,
            order_date: cart.order_date})
        });

      }
      console.log(this.carts)


      console.log('test format date', Cart.format(new Date(Date.now())))

    })
  }

}
