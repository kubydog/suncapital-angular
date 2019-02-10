import * as auth from './user/user.reducer';

export interface AppState {
  authState: auth.State;
}

export const reducers = {
  auth: auth.reducer
}
