import {Component, Injectable, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {Client} from '../../model/client';
import {Store} from '@ngrx/store';
import {AppState, selectClientState} from '../../store/app.states';
import {Observable, Subscription} from 'rxjs';
import {GetClientById} from '../../store/client/client.actions';
import {ActivatedRoute} from '@angular/router';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import {Account} from '../../model/account';
import {Add, Delete, Edit} from '../../store/account/account.actions';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit, OnDestroy {

  client: Client;
  clientState: Observable<any>;
  clientError: string | null;
  modalRef: BsModalRef;
  config = {
    animated: true
  };
  accountForm;
  subject = new Subscription();
  accounts: Account[];
  selectedAccount: Account;
  modalTitle: string;
  isAdd: boolean;

  constructor(private store: Store<AppState>,
              private route: ActivatedRoute,
              private modalService: BsModalService,
              private formBuilder: FormBuilder) {
    this.clientState = this.store.select(selectClientState);
    this.accountForm = this.formBuilder.group({
      accountName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      bank: ['', Validators.required],
      _id: ['']
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.store.dispatch(new GetClientById(id));
    });
    this.clientState.subscribe(state => {
      this.client = state.currentClient;
      if (this.client) {
        this.accounts = this.client.accounts;
      }
      this.clientError = state.errorMessage;
    });
  }

  openAccount(template: TemplateRef<any>, account: Account) {
    this.isAdd = true;
    this.modalTitle = 'Add Account';
    this.modalRef = this.modalService.show(template, this.config);
  }

  onSubmit() {
    if (this.isAdd) {
      const payload: Account = {
        accountName: this.accountName.value,
        accountNumber: this.accountNumber.value,
        bank: this.bank.value,
        clientId: this.client._id
      }
      this.store.dispatch(new Add(payload));
    }
    else {
      const payload: Account = {
        _id: this._id.value,
        accountName: this.accountName.value,
        accountNumber: this.accountNumber.value,
        bank: this.bank.value,
        clientId: this.client._id
      };
      this.store.dispatch(new Edit(payload));
    }

  }

  onDelete(id: string) {
    const payload = {id: id};
    this.store.dispatch(new Delete(payload));
  }

  onEdit(template: TemplateRef<any>, account: Account) {
    this.selectedAccount = account;
    this.modalTitle = 'Edit Account';
    this.isAdd = false;
    if (this.selectedAccount) {
      this.accountName.setValue(this.selectedAccount.accountName);
      this.accountNumber.setValue(this.selectedAccount.accountNumber);
      this.bank.setValue(this.selectedAccount.bank);
      this._id.setValue(this.selectedAccount._id);
    }
    this.modalRef = this.modalService.show(template, this.config);
    this.selectedAccount = null;
  }

  get accountName() {
    return this.accountForm.get('accountName');
  }

  get accountNumber() {
    return this.accountForm.get('accountNumber');
  }

  get bank() {
    return this.accountForm.get('bank');
  }

  get _id() {
    return this.accountForm.get('_id');
  }

  ngOnDestroy(): void {
    this.subject.unsubscribe();
  }

}
