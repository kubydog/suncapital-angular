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
}
