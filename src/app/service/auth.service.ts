import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getToken(): string {
    return localStorage.getItem('token');
  }

  signIn(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/user/authenticate`;
    return this.http.post<User>(url, { email, password});
  }

  signUp(user: User): Observable<User> {
    const url = `${this.BASE_URL}/user/register`;
    return this.http.post<User>(url, user);
  }

  getUserByToken(): Observable<any> {
    const url = `${this.BASE_URL}/user/getUserByToken`;
    return this.http.get<User>(url);
  }
}
