import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // displayLoadingIndicator = false;


  constructor() { }
  // ngOnInit(): void {
  //   // this.router.events.subscribe((routerEvent) => {
  //   //   if(routerEvent instanceof NavigationStart) {
  //   //     this.displayLoadingIndicator = true
  //   //   }

  //   //   if(routerEvent instanceof NavigationEnd) {
  //   //     this.displayLoadingIndicator = false
  //   //   }

  //   // })
  // }

}
