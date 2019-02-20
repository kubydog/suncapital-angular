import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AccountService} from '../../service/account.service';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {
  AccountActionTypes,
  Add,
  AddFailure,
  AddSuccess,
  GetByClientId,
  GetByClientIdFailure,
  GetByClientIdSuccess
} from './account.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';

@Injectable()
export class AccountEffect {

  constructor(
    private actions: Actions,
    private accountService: AccountService,
    private router: Router,
  ) {}

  @Effect()
  Add: Observable<any> = this.actions.pipe(
    ofType(AccountActionTypes.ADD),
    map( (action: Add) => action.payload),
    switchMap( payload => {
      return this.accountService.add(payload).pipe(
        map( account => {
          console.log('Add Account Success' + account);
          return new AddSuccess(account);
        }),
        catchError( error => {
          console.log('Add Account Failure' + error);
          return of(new AddFailure({error: error}));
        })
      );
    })
  );

  @Effect({dispatch: false})
  AddSuccess: Observable<any> = this.actions.pipe(
    ofType(AccountActionTypes.ADD_SUCCESS),
    tap( () => {
      location.reload();
    })
  );

  @Effect({dispatch: false})
  AddFailure: Observable<any> = this.actions.pipe(
    ofType(AccountActionTypes.ADD_FAILURE)
  );

  @Effect()
  GetByClientId: Observable<any> = this.actions.pipe(
    ofType(AccountActionTypes.GET_CLIENTID),
    map( (action: GetByClientId) => action.payload),
    switchMap( payload => {
      return this.accountService.getAccountsByClientId(payload.clientId).pipe(
        map( accounts => {
          console.log('Get Accounts By ClientId Success' + accounts);
          return new GetByClientIdSuccess(accounts);
        }),
        catchError( error => {
          console.log('Get Accounts By ClientId Failure' + error);
          return of(new GetByClientIdFailure({error: error}));
        })
      );
    })
  );

  @Effect({dispatch: false})
  GetByClientIdSuccess: Observable<any> = this.actions.pipe(
    ofType(AccountActionTypes.GET_CLIENTID_SUCCESS),
  );

  @Effect({dispatch: false})
  GetByClientIdFailure: Observable<any> = this.actions.pipe(
    ofType(AccountActionTypes.GET_CLIENTID_FAILURE)
  );
}
