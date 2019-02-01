import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    const user = this.authService.auth(this.email.value, this.password.value);
    console.log(user);
    return true;
  }

}
