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
}
