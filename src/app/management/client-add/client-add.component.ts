import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Client} from '../../model/client';
import {Store} from '@ngrx/store';
import {AppState, selectClientState} from '../../store/app.states';
import {Observable} from 'rxjs';
import {Add} from '../../store/client/client.actions';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  clientForm;
  submitted = false;
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(private formBuilder: FormBuilder,
              private store: Store<AppState>) {
    this.clientForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      chineseName: [''],
      birthDate: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      suburb: ['', Validators.required],
      state: ['', Validators.required],
      postCode: ['', Validators.required],
      identityType: ['Driver Licence', Validators.required],
      identity: ['', Validators.required],
      identityExpireDate: ['']
    });
    this.getState = this.store.select(selectClientState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.clientForm.invalid) {
      return;
    }
    const payload: Client = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      chineseName: this.chineseName.value,
      birthDate: this.birthDate.value,
      mobile: this.mobile.value,
      address: this.address.value,
      suburb: this.suburb.value,
      state: this.state.value,
      postCode: this.postCode.value,
      identityType: this.identityType.value,
      identity: this.identity.value,
      identityExpireDate: this.identityExpireDate.value
    };
    this.store.dispatch(new Add(payload));
  }

  get firstName() {
    return this.clientForm.get('firstName');
  }

  get lastName() {
    return this.clientForm.get('lastName');
  }

  get chineseName() {
    return this.clientForm.get('chineseName');
  }

  get birthDate() {
    return this.clientForm.get('birthDate');
  }

  get mobile() {
    return this.clientForm.get('mobile');
  }

  get address() {
    return this.clientForm.get('address');
  }

  get suburb() {
    return this.clientForm.get('suburb');
  }

  get state() {
    return this.clientForm.get('state');
  }

  get postCode() {
    return this.clientForm.get('postCode');
  }

  get identityType() {
    return this.clientForm.get('identityType');
  }

  get identity() {
    return this.clientForm.get('identity');
  }

  get identityExpireDate() {
    return this.clientForm.get('identityExpireDate');
  }
}
