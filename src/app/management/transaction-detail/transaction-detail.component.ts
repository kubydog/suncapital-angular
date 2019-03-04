import { Component, OnInit } from '@angular/core';
import {Transaction} from '../../model/transaction';
import {AppState, selectTransactionState} from '../../store/app.states';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {GetById} from '../../store/transaction/transaction.actions';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {

  transaction: Transaction;
  transactionState: Observable<any>;
  error;

  constructor(private store: Store<AppState>,
              private route: ActivatedRoute) {
    this.transactionState = this.store.select(selectTransactionState);
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      const id = params.id;
      const payload = {
        id: id
      };
      this.store.dispatch(new GetById(payload));
    });

    this.transactionState.subscribe( state => {
      this.transaction = state.currentTransaction;
      this.error = state.errorMessage;
    });
  }

}
