import {IUser} from "../../models/user.interface";
import {UserApiService} from "./user-api.service";
import {HttpClient} from "@angular/common/http";

export class UserService {
  users: IUser[] = []
}
