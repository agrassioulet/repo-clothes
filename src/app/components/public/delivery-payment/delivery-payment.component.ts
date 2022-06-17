import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { IUser, User } from 'src/app/_models/user';
import { ProductService } from 'src/app/_services/product.service';
import { UserService } from 'src/app/_services/user.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-delivery-payment',
  templateUrl: './delivery-payment.component.html',
  styleUrls: ['./delivery-payment.component.css']
})
export class DeliveryPaymentComponent implements OnInit {
  public user: IUser =  User.initUser();
  stripePromise = loadStripe(environment.stripe_key);

  constructor(
    private productService: ProductService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.productService.getCart().subscribe(result => {
      console.log(result)
    })

    this.userService.getUserInfos().subscribe(result => {
      this.user = result.data
    })

  }

  makePayment(amount : any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: '',
      locale: 'auto',
      token: function(stripeToken: any) {
        console.log(stripeToken.card)
        alert('Stripe token generated')
      }
    })

    paymentHandler.open({
      name: 'test',
      description: '4 products added',
      amount: amount
    })
  }

  invokeStrip() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script')
      script.id = 'stripe-script'
      script.type = 'text/javascript'
      script.src = ''
      window.document.appendChild(script)
    }
  }


  async checkout() {
    // Call your backend to create the Checkout session.
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await this.stripePromise;
    console.log("stripe", stripe)
    const error = stripe != null ? await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price: 'price_1LACuMDB5BiH74m8Lm5FdktS',  quantity: 2 }],
      successUrl: `${window.location.href}/success`,
      cancelUrl: `${window.location.href}/failure`,
    }) : 'stripe not founded'
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.log('redirectToCheckout', error)
    if (error) {
      console.log(error);
    }

  }

  // checkout() {

  //   console.log("checkout")
  // }

}
