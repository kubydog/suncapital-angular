import { Injectable } from '@angular/core';
import { USERS } from '../mockdata/Users';
import {User} from '../model/user';

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

  getById(id: string): User {
    return this.users.find(user => user._id === id);
  }
}
