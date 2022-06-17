import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    setTimeout(function() {
      console.log('end timeout')
    }, 5000);
  }

  ngOnInit(): void {
  }

}
