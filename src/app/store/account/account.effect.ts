import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AccountService} from '../../service/account.service';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {
  AccountActionTypes,
  Add,
  AddFailure,
  AddSuccess, Delete, DeleteFailure, DeleteSuccess, Edit, EditFailure, EditSuccess,
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

  @Effect()
  Edit: Observable<any> = this.actions.pipe(
    ofType(AccountActionTypes.EDIT),
    map( (action: Edit) => action.payload),
    switchMap( payload => {
      return this.accountService.editAccount(payload).pipe(
        map( account => {
          console.log('Edit Account Success ' + account);
          return new EditSuccess(account);
        }),
        catchError( error => {
          console.log('Edit Account Failure ' + error);
          return of(new EditFailure({error: error}));
        })
      );
    })
  );

  @Effect({dispatch: false})
  EditSuccess: Observable<any> = this.actions.pipe(
    ofType(AccountActionTypes.EDIT_SUCCESS),
    tap(() => {
      location.reload();
    })
  );

  @Effect({dispatch: false})
  EditFailure: Observable<any> = this.actions.pipe(
    ofType(AccountActionTypes.EDIT_FAILURE)
  );

  @Effect()
  Delete: Observable<any> = this.actions.pipe(
    ofType(AccountActionTypes.DELETE),
    map( (action: Delete) => action.payload),
    switchMap( payload => {
      return this.accountService.deleteAccount(payload.id).pipe(
        map( id => {
          console.log('Delete Account Success ' + id);
          return new DeleteSuccess(id);
        }),
        catchError( error => {
          console.log('Delete Account Failure ' + error);
          return of(new DeleteFailure({error: error}));
        })
      );
    })
  );

  @Effect({dispatch: false})
  DeleteSuccess: Observable<any> = this.actions.pipe(
    ofType(AccountActionTypes.DELETE_SUCCESS),
    tap(() => {
      location.reload();
    })
  );

  @Effect({dispatch: false})
  DeleteFailure: Observable<any> = this.actions.pipe(
    ofType(AccountActionTypes.DELETE_FAILURE)
  );
}
