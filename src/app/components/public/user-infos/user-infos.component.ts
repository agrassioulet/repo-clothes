import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.css']
})
export class UserInfosComponent implements OnInit {
  user!:IUser;

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserInfos().subscribe(result => {
      console.log(result)
      this.user = result
    })
  }

}
