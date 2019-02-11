import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ClientService} from '../../service/client.service';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Add, AddFailure, AddSuccess, ClientActionTypes} from './client.actions';
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
}
