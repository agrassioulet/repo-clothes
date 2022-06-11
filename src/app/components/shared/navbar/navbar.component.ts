import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  togglePanel: boolean = false
  submenu: string =''
  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {}

  toggleNav(str : string) {
    let sub_menu = document.getElementById("sub_menu_all")
    let content = document.getElementById("content")

    this.submenu = str

    if (sub_menu != null && content != null) {
      // OPEN SUBMENU
      if (str != '') {
        sub_menu.style.display="block"
        content.style.backgroundColor="green !important;"
        this.auth.getUserDetails() 
      }
      // CLOSE SUBMENU
      else {
        sub_menu.style.display="none"
        content.style.filter="none"

      }
    }

  }


}
