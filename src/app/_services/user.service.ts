import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:4000/user';

  constructor(
    private httpClient: HttpClient
  ) { }


  public getUserInfos() {
    return this.httpClient.get<{status: string, data: any}>(this.url + "/get-user-infos");
  }

  public saveUserInfos(user: IUser) {
    return this.httpClient.post<{status: number, data: any, token: string}>(this.url + "/save-user-infos", user );
  }

}
