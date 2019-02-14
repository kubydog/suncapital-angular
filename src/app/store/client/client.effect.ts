import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ClientService} from '../../service/client.service';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {
  Add,
  AddFailure,
  AddSuccess,
  ClientActionTypes, Edit, EditFailure, EditSuccess,
  GetClientById,
  GetClientByIdFailure,
  GetClientByIdSuccess,
  GetClients, GetClientsFailure, GetClientsSuccess
} from './client.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';

@Injectable()
export class ClientEffect {
  constructor(
    private actions: Actions,
    private clientService: ClientService,
    private router: Router
  ) {}

  @Effect()
  Add: Observable<any> = this.actions.pipe(
    ofType(ClientActionTypes.ADD),
    map((action: Add) => action.payload),
    switchMap(payload => {
      return this.clientService.add(payload).pipe(
        map(client => {
          console.log('Add Client' + client);
          return new AddSuccess(client);
        }),
        catchError(error => {
          console.log('Add Client Error: ' + error);
          return of(new AddFailure({error: error}));
        })
      );
    })
  );

  @Effect({dispatch: false})
  AddSuccess: Observable<any> = this.actions.pipe(
    ofType(ClientActionTypes.ADD_SUCCESS),
    map((action: AddSuccess) => action.payload),
    tap(payload => {
      this.router.navigateByUrl(`/app/client/${payload._id}`);
    })
  );

  @Effect({dispatch: false})
  AddFailure: Observable<any> = this.actions.pipe(
    ofType(ClientActionTypes.ADD_FAILURE)
  );

  @Effect()
  GetClientById: Observable<any> = this.actions.pipe(
    ofType(ClientActionTypes.GETCLIENT_ID),
    map((action: GetClientById) => action.payload),
    switchMap(payload => {
      return this.clientService.getClientById(payload).pipe(
        map(client => {
          console.log('Get Client Success:' + client);
          return new GetClientByIdSuccess(client);
        }),
        catchError( error => {
          console.log('Get Client Error:' + error);
          return of(new GetClientByIdFailure({error: error}));
        })
      );
    })
  );

  @Effect({dispatch: false})
  GetClientByIdSuccess: Observable<any> = this.actions.pipe(
    ofType(ClientActionTypes.GETCLIENT_ID_SUCCESS)
  );

  @Effect({dispatch: false})
  GetClientByIdFailure: Observable<any> = this.actions.pipe(
    ofType(ClientActionTypes.GETCLIENT_ID_FAILURE),
    map((action: GetClientByIdFailure) => action.payload),
    tap( payload => {
      this.router.navigateByUrl('/app/clients');
    })
  );

  @Effect()
  GetClients: Observable<any> = this.actions.pipe(
    ofType(ClientActionTypes.GETCLIENTS),
    map((action: GetClients) => action.payload),
    switchMap( payload => {
      return this.clientService.getClients(payload.firstName, payload.lastName).pipe(
        map( clients => {
          console.log('Get Clients Success: ' + clients);
          return new GetClientsSuccess(clients);
        }),
        catchError( error => {
          console.log('Get Clients Failure: ' + error);
          return of(new GetClientsFailure({ error: error}));
        })
      );
    })
  );

  @Effect({dispatch: false})
  GetClientsSuccess: Observable<any> = this.actions.pipe(
    ofType(ClientActionTypes.GETCLIENTS_SUCCESS)
  );

  @Effect({dispatch: false})
  GetClientsFailure: Observable<any> = this.actions.pipe(
    ofType(ClientActionTypes.GEtCLIENTS_FAILURE)
  );

  @Effect()
  Edit: Observable<any> = this.actions.pipe(
    ofType(ClientActionTypes.EDIT),
    map((action: Edit) => action.payload),
    switchMap( payload => {
      return this.clientService.edit(payload).pipe(
        map( client => {
          console.log('Edit Client Success' + client);
          return new EditSuccess(client);
        }),
        catchError( error => {
          console.log('Edit Client Failure' + error);
          return of(new EditFailure({error: error}));
        })
      );
    })
  );

  @Effect({dispatch: false})
  EditSuccess: Observable<any> = this.actions.pipe(
    ofType(ClientActionTypes.EDIT_SUCCESS),
    map((action: AddSuccess) => action.payload),
    tap(payload => {
      this.router.navigateByUrl(`/app/client/${payload._id}`);
    })
  );

  @Effect({dispatch: false})
  EditFailure: Observable<any> = this.actions.pipe(
    ofType(ClientActionTypes.EDIT_FAILURE)
  );
}
