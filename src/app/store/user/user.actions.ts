import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  SIGNIN = '[Auth] SignIn',
  SIGNIN_SUCCESS = '[Auth] SignIn Success',
  SIGNIN_FAILURE = '[Auth] SignIn Failure',
  SIGNUP = '[Auth] Signup',
  SIGNUP_SUCCESS = '[Auth] SignUp Success',
  SIGNUP_FAILURE = '[Auth] SignUp Failure',
  GETUSER_TOKEN = '[Auth] Get User By Token',
  GETUSER_TOKEN_SUCCESS = '[Auth] Get User By Token Success',
  GETUSER_TOKEN_FAILURE = '[Auth] Get User By Token Failure',
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

export class GetUserByToken implements Action {
  readonly type = AuthActionTypes.GETUSER_TOKEN;
  constructor() {}
}

export class GetUserByTokenSuccess implements Action {
  readonly type = AuthActionTypes.GETUSER_TOKEN_SUCCESS;
  constructor(public payload: any) {}
}

export class GetUserByTokenFailure implements Action {
  readonly type = AuthActionTypes.GETUSER_TOKEN_FAILURE;
  constructor(public payload: any) {}
}

export type All = | SignIn | SignSuccess | SignFailure | SignUp | SignUpSuccess | SignUpFailure
  | GetUserByToken | GetUserByTokenSuccess | GetUserByTokenFailure;
