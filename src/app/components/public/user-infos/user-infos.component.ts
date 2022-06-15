import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser, User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.css']
})
export class UserInfosComponent implements OnInit {
  user: IUser = User.initUser();

  userForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    adress: new FormControl('', []),
    city: new FormControl('', []),
    dateOfBirth: new FormControl('', []),
    email: new FormControl('', [Validators.email]),
    firstname: new FormControl('', []),
    lastname: new FormControl('', []),
    postalCode: new FormControl('', [Validators.pattern('[0-9]{5}')]),
  })

  isSaved: boolean = false;

  constructor(
    private userService: UserService,
    private _auth: AuthService
  ) { }

  get f() { return this.userForm }

  ngOnInit(): void {
    this.userService.getUserInfos().subscribe(result => {
      console.log(result)
      this.user = result.data
    })
  }

  saveUserInfos(): void {
    this.userService.saveUserInfos(this.user).subscribe(result => {
      console.log(result)

      if (result.status == 1) {
        this._auth.setDataInLocalStorage('userData', JSON.stringify(result.data));
        this._auth.setDataInLocalStorage('token', result.token);
        this.isSaved = true
        setTimeout(() => {
          this.isSaved = false
        }, 4000);
      }
    })
  }

}
