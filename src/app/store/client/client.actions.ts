import {Action} from '@ngrx/store';

export enum ClientActionTypes {
  ADD = '[Client] Add',
  ADD_SUCCESS = '[Client] Add Success',
  ADD_FAILURE = '[Client] Add Failure',
  GETCLIENT_ID = '[Client] Get Client By ID',
  GETCLIENT_ID_SUCCESS = '[Client] Get Client By ID SUCCESS',
  GETCLIENT_ID_FAILURE = '[Client] Get Client By ID FAILURE',
  GETCLIENTS = '[Client] Get Clients',
  GETCLIENTS_SUCCESS = '[Client] Get Clients Success',
  GEtCLIENTS_FAILURE = '[Client] Get Clients Failure',
  EDIT = '[Client] Edit',
  EDIT_SUCCESS = '[Client] Edit Success',
  EDIT_FAILURE = '[Client] Edit Failure',
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

export class GetClientById implements Action {
  readonly type = ClientActionTypes.GETCLIENT_ID;
  constructor(public payload: any) {}
}

export class GetClientByIdSuccess implements Action {
  readonly type = ClientActionTypes.GETCLIENT_ID_SUCCESS;
  constructor(public payload: any) {}
}

export class GetClientByIdFailure implements Action {
  readonly type = ClientActionTypes.GETCLIENT_ID_FAILURE;
  constructor(public payload: any) {}
}

export class GetClients implements Action {
  readonly type = ClientActionTypes.GETCLIENTS;
  constructor(public payload: any) {}
}

export class GetClientsSuccess implements Action {
  readonly type = ClientActionTypes.GETCLIENTS_SUCCESS;
  constructor(public payload: any) {}
}

export class GetClientsFailure implements Action {
  readonly type = ClientActionTypes.GEtCLIENTS_FAILURE;
  constructor(public payload: any) {}
}

export class Edit implements Action {
  readonly type = ClientActionTypes.EDIT;
  constructor(public payload: any) {}
}

export class EditSuccess implements Action {
  readonly type = ClientActionTypes.EDIT_SUCCESS;
  constructor(public payload: any) {}
}

export class EditFailure implements Action {
  readonly type = ClientActionTypes.EDIT_FAILURE;
  constructor(public payload: any) {}
}

export type All = | Add | AddSuccess | AddFailure
  | GetClientById | GetClientByIdSuccess | GetClientByIdFailure
  | GetClients | GetClientsSuccess | GetClientsFailure
  | Edit | EditSuccess | EditFailure;
