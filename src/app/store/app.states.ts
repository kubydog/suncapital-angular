import * as auth from './user/user.reducer';
import * as client from './client/client.reducer';
import {createFeatureSelector} from '@ngrx/store';

export interface AppState {
  authState: auth.State;
  clientState: client.State;
}

export const reducers = {
  auth: auth.reducer,
  client: client.reducer
}

export const selectAuthState = createFeatureSelector<AppState>('auth');
export const selectClientState = createFeatureSelector<AppState>('client');
