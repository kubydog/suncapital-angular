import { Injectable } from '@angular/core';
import { USERS } from '../mockdata/Users';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users = USERS;

  constructor() { }

  auth(username: string, password: string): User {
    const user = this.users.find(u => u.email === username);
    if (user.password === password) {
      return user;
    }
    return null;
  }
}
