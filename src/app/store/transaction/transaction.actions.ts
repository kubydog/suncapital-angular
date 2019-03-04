import {Action} from '@ngrx/store';

export enum TransactionActionTypes {
  ADD_TRANSACTION = '[Transaction] Add Transaction',
  ADD_TRANSACTION_SUCCESS = '[Transaction] Add Transaction Success',
  ADD_TRANSACTION_FAILURE = '[Transaction] Add Transaction Failure',
}

export class AddTransaction implements Action {
  readonly type = TransactionActionTypes.ADD_TRANSACTION;
  constructor(public payload: any) {}
}

export class AddTransactionSuccess implements Action {
  readonly type = TransactionActionTypes.ADD_TRANSACTION_SUCCESS;
  constructor(public payload: any) {}
}

export class AddTransactionFailure implements Action {
  readonly type = TransactionActionTypes.ADD_TRANSACTION_FAILURE;
  constructor(public payload: any) {}
}

export type All = |AddTransaction |AddTransactionSuccess |AddTransactionFailure;
