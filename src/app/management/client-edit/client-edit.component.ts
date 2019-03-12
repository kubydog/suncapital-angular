import { Component, OnInit } from '@angular/core';
import {Client} from '../../model/client';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState, selectClientState} from '../../store/app.states';
import {ActivatedRoute} from '@angular/router';
import {Add, Edit, GetClientById} from '../../store/client/client.actions';
import {FormBuilder, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  editForm;
  client: Client;
  getState: Observable<any>;
  errorMessage: string | null;
  submitted = false;

  constructor(private store: Store<AppState>,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {
    this.getState = this.store.select(selectClientState);
    this.editForm = this.formBuilder.group({
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
      identityExpireDate: [''],
      identityImage: ['']
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.store.dispatch(new GetClientById(params.id));
    });
    this.getState.subscribe(state => {
      this.client = state.currentClient;
      this.errorMessage = state.errorMessage;
      const dp = new DatePipe(navigator.language);
      const p = 'y-MM-dd';
      const bod = dp.transform(this.client.birthDate, p);
      const expireDate = dp.transform(this.client.identityExpireDate, p);
      this.editForm = this.formBuilder.group({
        firstName: [this.client.firstName, Validators.required],
        lastName: [this.client.lastName, Validators.required],
        chineseName: [this.client.chineseName],
        birthDate: [bod, Validators.required],
        mobile: [this.client.mobile, Validators.required],
        address: [this.client.address, Validators.required],
        suburb: [this.client.suburb, Validators.required],
        state: [this.client.state, Validators.required],
        postCode: [this.client.postCode, Validators.required],
        identityType: [this.client.identityType, Validators.required],
        identity: [this.client.identity, Validators.required],
        identityExpireDate: [expireDate],
        identityImage: ['']
      });
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    const payload: Client = {
      _id: this.client._id,
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
    this.store.dispatch(new Edit(payload));
  }

  get firstName() {
    return this.editForm.get('firstName');
  }

  get lastName() {
    return this.editForm.get('lastName');
  }

  get chineseName() {
    return this.editForm.get('chineseName');
  }

  get birthDate() {
    return this.editForm.get('birthDate');
  }

  get mobile() {
    return this.editForm.get('mobile');
  }

  get address() {
    return this.editForm.get('address');
  }

  get suburb() {
    return this.editForm.get('suburb');
  }

  get state() {
    return this.editForm.get('state');
  }

  get postCode() {
    return this.editForm.get('postCode');
  }

  get identityType() {
    return this.editForm.get('identityType');
  }

  get identity() {
    return this.editForm.get('identity');
  }

  get identityExpireDate() {
    return this.editForm.get('identityExpireDate');
  }
}
