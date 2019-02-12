import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ClientService} from '../../service/client.service';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Add, AddFailure, AddSuccess, ClientActionTypes, GetClientById, GetClientByIdFailure, GetClientByIdSuccess} from './client.actions';
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
}
