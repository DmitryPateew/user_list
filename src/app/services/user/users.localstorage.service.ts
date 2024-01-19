import {Injectable} from "@angular/core";
import {EXCEPTIONS} from "../../constant/constant";
import {IUser} from "../../models/user.interface";

@Injectable({providedIn: "root"})

export class UsersLocalstorageService {

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): IUser[] | void {
    const {LOCAL_STORAGE_UNDEFINED} = EXCEPTIONS;

    try {
      const localValue: any = localStorage.getItem(key);

      if (localValue && JSON.parse(localValue).length !== 0) {
        return JSON.parse(localValue);
      } else {
        console.log(LOCAL_STORAGE_UNDEFINED);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
