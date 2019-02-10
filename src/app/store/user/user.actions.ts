import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  SIGNIN = '[Auth] SignIn',
  SIGNIN_SUCCESS = '[Auth] SignIn Success',
  SIGNIN_FAILURE = '[Auth] SignIn Failure',
  SIGNUP = '[Auth] Signup',
  SIGNUP_SUCCESS = '[Auth] SignUp Success',
  SIGNUP_FAILURE = '[Auth] SignUp Failure',
}

export class SignIn implements Action {
  readonly type = AuthActionTypes.SIGNIN;
  constructor(public payload: any) {}
}

export class SignSuccess implements Action {
  readonly type = AuthActionTypes.SIGNIN_SUCCESS;
  constructor(public payload: any) {}
}

export class SignFailure implements Action {
  readonly type = AuthActionTypes.SIGNIN_FAILURE;
  constructor(public payload: any) {}
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SIGNUP;
  constructor(public payload: any) {}
}

export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SIGNUP_SUCCESS;
  constructor(public payload: any) {}
}

export class SignUpFailure implements Action {
  readonly type = AuthActionTypes.SIGNUP_FAILURE;
  constructor(public payload: any) {}
}

export type All = | SignIn | SignSuccess | SignFailure | SignUp | SignUpSuccess | SignUpFailure;
