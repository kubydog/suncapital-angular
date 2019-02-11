import {Action} from '@ngrx/store';

export enum ClientActionTypes {
  ADD = '[Client] Add',
  ADD_SUCCESS = '[Client] Add Success',
  ADD_FAILURE = '[Client] Add Failure',
}

export class Add implements Action {
  readonly type = ClientActionTypes.ADD;
  constructor(public payload: any) {}
}

export class AddSuccess implements Action {
  readonly type = ClientActionTypes.ADD_SUCCESS;
  constructor(public payload: any) {}
}

export class AddFailure implements Action {
  readonly type = ClientActionTypes.ADD_FAILURE;
  constructor(public payload: any) {}
}

export type All = | Add | AddSuccess | AddFailure;
