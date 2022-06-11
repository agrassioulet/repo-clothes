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
    return this.httpClient.get<IUser>(this.url + "/get-user-infos");
  }


}
