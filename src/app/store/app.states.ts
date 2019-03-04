import * as auth from './user/user.reducer';
import * as client from './client/client.reducer';
import * as account from './account/account.reducer';
import * as transaction from './transaction/transaction.reducer';
import {createFeatureSelector} from '@ngrx/store';

export interface AppState {
  authState: auth.State;
  clientState: client.State;
  accountState: account.State;
  transactionState: transaction.State;
}

export const reducers = {
  auth: auth.reducer,
  client: client.reducer,
  account: account.reducer,
  transaction: transaction.reducer
}

export const selectAuthState = createFeatureSelector<AppState>('auth');
export const selectClientState = createFeatureSelector<AppState>('client');
export const selectAccountState = createFeatureSelector<AppState>('account');
export const selectTransactionState = createFeatureSelector<AppState>('transaction');
