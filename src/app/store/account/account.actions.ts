import {Action} from '@ngrx/store';

export enum AccountActionTypes {
  ADD = '[Account] Add Account',
  ADD_SUCCESS = '[Account] Add Account Success',
  ADD_FAILURE = '[Account] Add Account Failure',
  GET_CLIENTID = '[Account] Get By ClientId',
  GET_CLIENTID_SUCCESS = '[Account] Get By ClientId Success',
  GET_CLIENTID_FAILURE = '[Account] Get By ClientId Failure',
  EDIT = '[Account] Edit Account',
  EDIT_SUCCESS = '[Account] Edit Account Success',
  EDIT_FAILURE = '[Account] Edit Account Failure',
  DELETE = '[Account] Delete Account',
  DELETE_SUCCESS = '[Account] Delete Account Success',
  DELETE_FAILURE = '[Account] Delete Account Failure',
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

export class Edit implements Action {
  readonly type = AccountActionTypes.EDIT;
  constructor(public payload: any) {}
}

export class EditSuccess implements Action {
  readonly type = AccountActionTypes.EDIT_SUCCESS;
  constructor(public payload: any) {}
}

export class EditFailure implements Action {
  readonly type = AccountActionTypes.EDIT_FAILURE;
  constructor(public payload: any) {}
}

export class Delete implements Action {
  readonly type = AccountActionTypes.DELETE;
  constructor(public payload: any) {}
}

export class DeleteSuccess implements Action {
  readonly type = AccountActionTypes.DELETE_SUCCESS;
  constructor(public payload: any) {}
}

export class DeleteFailure implements Action {
  readonly type = AccountActionTypes.DELETE_FAILURE;
  constructor(public payload: any) {}
}

export type All = | Add | AddSuccess | AddFailure
                  | GetByClientId | GetByClientIdSuccess | GetByClientIdFailure
                  | Edit | EditSuccess | EditFailure
                  | Delete | DeleteSuccess | DeleteFailure;
