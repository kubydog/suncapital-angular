import {Action} from '@ngrx/store';

export enum AccountActionTypes {
  ADD = '[Account] Add Account',
  ADD_SUCCESS = '[Account] Add Account Success',
  ADD_FAILURE = '[Account] Add Account Failure',
  GET_CLIENTID = '[Account] Get By ClientId',
  GET_CLIENTID_SUCCESS = '[Account] Get By ClientId Success',
  GET_CLIENTID_FAILURE = '[Account] Get By ClientId Failure',
}

export class Add implements Action {
  readonly type = AccountActionTypes.ADD;
  constructor(public payload: any) {}
}

export class AddSuccess implements Action {
  readonly type = AccountActionTypes.ADD_SUCCESS;
  constructor(public payload: any) {}
}

export class AddFailure implements Action {
  readonly type = AccountActionTypes.ADD_FAILURE;
  constructor(public payload: any) {}
}

export class GetByClientId implements Action {
  readonly type = AccountActionTypes.GET_CLIENTID;
  constructor(public payload: any) {}
}

export class GetByClientIdSuccess implements Action {
  readonly type = AccountActionTypes.GET_CLIENTID_SUCCESS;
  constructor(public payload: any) {}
}

export class GetByClientIdFailure implements Action {
  readonly type = AccountActionTypes.GET_CLIENTID_FAILURE;
  constructor(public payload: any) {}
}

export type All = | Add | AddSuccess | AddFailure
                  | GetByClientId | GetByClientIdSuccess | GetByClientIdFailure;
