import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {AppState, selectAuthState} from '../store/app.states';
import {SignIn} from '../store/user/user.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  getState: Observable<any>;
  errorMessage: string | null;

  constructor(
    private store: Store<AppState>,
    private router: Router) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }

  onSubmit() {
    const payload = {
      email: this.email.value,
      password: this.password.value
    }
    this.store.dispatch(new SignIn(payload));
  }

}
