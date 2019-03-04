import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Transaction} from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private BASE_URL = 'http://localhost:4000/transaction';

  constructor(private http: HttpClient) { }

  add(transaction: Transaction) {
    const url = `${this.BASE_URL}/add`;
    return this.http.post(url, transaction);
  }

  getById(id: string) {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.get(url);
  }

  getTransactions(firstName: string, lastName: string) {
    let query = '?';
    if (firstName && firstName !== '') {
      query = query + 'firstName=' + firstName;
    }
    if (lastName && lastName !== '') {
      if (query === '?') {
        query = query + 'lastName=' + lastName;
      } else {
        query = query + '&lastName=' + lastName;
      }
    }
    const url = `${this.BASE_URL}/transactions/${query}`;
    return this.http.get(url);
  }
}
