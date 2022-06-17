import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../_models/user';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.URL_BACKEND + '/user'
  
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
