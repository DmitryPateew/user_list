import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from "../../models/user.interface";
import {Observable} from "rxjs";
import {GET_USERS_URL} from "../../constant/constant";

@Injectable({
  providedIn: 'root'
})

export class UserApiService {
  constructor(private httpClient: HttpClient) {
  }

  private users: Observable<IUser[]> | undefined;

  getUsers(): Observable<IUser[]> {
    this.users = this.httpClient.get<IUser[]>(GET_USERS_URL);
    return this.users;
  }
}
