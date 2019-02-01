import { Injectable } from '@angular/core';
import { USERS } from '../mockdata/Users';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = USERS;

  constructor() { }

  register(user: User) {
    console.log(user);
    this.users.push(user);
    console.log(this.users.values());
    return true;
  }
}
