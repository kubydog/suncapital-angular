import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {Transaction} from '../../model/transaction';
import {AppState, selectTransactionState} from '../../store/app.states';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {GetTransactions} from '../../store/transaction/transaction.actions';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  firstName = new FormControl('');
  lastName = new FormControl('');
  transactions: Transaction[];
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(private store: Store<AppState>,
              private router: Router) {
    this.getState = this.store.select(selectTransactionState);
  }

  ngOnInit() {
    this.getState.subscribe( state => {
      this.transactions = state.transactions;
      this.errorMessage = state.errorMessage;
    });
  }

  onSubmit() {
    const payload = {
      firstName: this.firstName.value,
      lastName: this.lastName.value
    };
    this.store.dispatch(new GetTransactions(payload));
  }

  onDetail(id) {
    this.router.navigateByUrl(`/app/transaction/${id}`);
  }
}
