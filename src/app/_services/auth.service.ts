import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  getUserDetails() {
    if (localStorage.getItem('userData')) {
      return localStorage.getItem('userData')
    } else {
      return null
    }
  }

  getUsername() {
    console.log("in getusername",this.getUserDetails())
    let userdetail: any = this.getUserDetails()
    if(typeof userdetail === 'string')
      return JSON.parse(userdetail)?.username ?? ''
    else
      return ''
  }

  isUserLogin() {
    if (this.getUserDetails() != null) {
      return true
    }
    return false
  }

  setDataInLocalStorage(variableName: string, data: any) {
    localStorage.setItem(variableName, data);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  clearStorage() {
    localStorage.clear();
  }
}