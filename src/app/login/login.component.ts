import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {AuthService} from '../service/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.states';
import {SignIn} from '../store/user/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  constructor(
    private store: Store<AppState>,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const payload = {
      email: this.email.value,
      password: this.password.value
    }
    console.log({email: this.email.value, password: this.password.value});
    this.store.dispatch(new SignIn(payload))
    this.router.navigate(['/app/dashboard'])
    return true;
  }

}
