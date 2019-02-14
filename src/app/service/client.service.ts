import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private BASE_URL = 'http://localhost:4000/client';
  constructor(private http: HttpClient) { }

  add(client: Client) {
    const url = `${this.BASE_URL}/add`;
    return this.http.post(url, client);
  }

  getClientById(id: string) {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.get(url);
  }

  getClients(firstName: string, lastName: string) {
    let query = '?';
    if (firstName && firstName !== '') {
      query = query + 'firstName=' + firstName;
    }
    if (lastName && lastName !== '') {
      if (query === '?') {
        query = query + 'lastName=' + lastName;
      }
      else {
        query = query + '&lastName=' + lastName;
      }
    }
    const url = `${this.BASE_URL}/clients/${query}`;
    return this.http.get(url);
  }

  edit(client: Client) {
    const url = `${this.BASE_URL}/edit/${client._id}`;
    return this.http.put(url, client);
  }
}
