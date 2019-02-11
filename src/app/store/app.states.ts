import * as auth from './user/user.reducer';
import {createFeatureSelector} from '@ngrx/store';

export interface AppState {
  authState: auth.State;
}

export const reducers = {
  auth: auth.reducer
}

export const selectAuthState = createFeatureSelector<AppState>('auth');
