import {Action} from '@ngrx/store';

export enum TransactionActionTypes {
  ADD_TRANSACTION = '[Transaction] Add Transaction',
  ADD_TRANSACTION_SUCCESS = '[Transaction] Add Transaction Success',
  ADD_TRANSACTION_FAILURE = '[Transaction] Add Transaction Failure',
  GET_BY_ID = '[Transaction] Get Transaction By Id',
  GET_BY_ID_SUCCESS = '[Transaction] Get Transaction By Id Success',
  GET_BY_ID_FAILURE = '[Transaction] Get Transaction By Id Failure',
  GET_TRANSACTIONS = '[Transaction] Get Transactions',
  GET_TRANSACTIONS_SUCCESS = '[Transaction] Get Transactions Success',
  GET_TRANSACTIONS_FAILURE = '[Transaction] Get Transactions Failure',
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

export class GetById implements Action {
  readonly type = TransactionActionTypes.GET_BY_ID;
  constructor(public payload: any) {}
}

export class GetByIdSuccess implements Action {
  readonly type = TransactionActionTypes.GET_BY_ID_SUCCESS;
  constructor(public payload: any) {}
}

export class GetByIdFailure implements Action {
  readonly type = TransactionActionTypes.GET_BY_ID_FAILURE;
  constructor(public payload: any) {}
}

export class GetTransactions implements Action {
  readonly type = TransactionActionTypes.GET_TRANSACTIONS;
  constructor(public payload: any) {}
}

export class GetTransactionsSuccess implements Action {
  readonly type = TransactionActionTypes.GET_TRANSACTIONS_SUCCESS;
  constructor(public payload: any) {}
}

export class GetTransactionsFailure implements Action {
  readonly type = TransactionActionTypes.GET_TRANSACTIONS_FAILURE;
  constructor(public payload: any) {}
}

export type All = |AddTransaction |AddTransactionSuccess |AddTransactionFailure
                  |GetById |GetByIdSuccess |GetByIdFailure
                  |GetTransactions |GetTransactionsSuccess |GetTransactionsFailure;
