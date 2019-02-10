import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { passwordInconformityValidator } from '../directive/password-inconformity.directive';
import {User} from '../model/user';
import { USERS } from '../mockdata/Users';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.states';
import {SignUp} from '../store/user/user.actions';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm;

  submitted = false;

  users: User[] = USERS;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private store: Store<AppState>) {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordVerify: ['', [Validators.required, Validators.minLength(6)]],
      isAdmin: [false]
    }, {validator: passwordInconformityValidator });
  }

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const payload: User = {
      email: this.email.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      password: this.password.value,
      isAdmin: this.isAdmin.value
    };
    this.store.dispatch(new SignUp(payload));
    this.router.navigate(['/login']);
  }

  get email() {
    return this.registerForm.get('email');
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get passwordVerify() {
    return this.registerForm.get('passwordVerify');
  }

  get isAdmin() {
    return this.registerForm.get('isAdmin');
  }
}
