import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Account} from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private BASE_URL = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  add(account: Account) {
    const url = `${this.BASE_URL}/account/add`;
    return this.http.post(url, account);
  }

  getAccountsByClientId(clientId: string) {
    const url = `${this.BASE_URL}/account/${clientId}`;
    return this.http.get(url);
  }

  editAccount(account: Account) {
    const url = `${this.BASE_URL}/account/${account._id}`;
    return this.http.put(url, account);
  }
}
