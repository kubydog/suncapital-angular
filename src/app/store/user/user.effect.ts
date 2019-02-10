import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router} from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of} from 'rxjs';
import { map, switchMap, tap, catchError } from 'rxjs/operators';

import { AuthService } from '../../service/auth.service';
import {AuthActionTypes, SignFailure, SignIn, SignSuccess, SignUp, SignUpFailure, SignUpSuccess} from './user.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect()
  SignIn: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNIN),
    map((action: SignIn) => action.payload),
    switchMap(payload => {
      return this.authService.signIn(payload.email, payload.password).pipe(
        map((user) => {
          console.log(user);
          return new SignSuccess({token: user.token, email: payload.email});
        }),
        catchError((error) => {
          console.log(error);
          return of(new SignFailure({error: error}));
        })
      );
    })
  );

  @Effect({dispatch: false})
  SignSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNIN_SUCCESS),
    tap((user) => {
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/');
    })
  );

  @Effect({dispatch: false})
  SignFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNIN_FAILURE)
  );

  @Effect()
  SignUp: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP),
    map((action: SignUp) => action.payload),
    switchMap(payload => {
      return this.authService.signUp(payload).pipe(
        map((user) => {
          console.log(user);
          return new SignUpSuccess({token: user.token, email: payload.email});
        }),
        catchError((error) => {
          console.log(error);
          return of(new SignUpFailure({error: error}));
        })
      );
    })
  );

  @Effect({dispatch: false})
  SignUpSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_SUCCESS)
  );

  @Effect({dispatch: false})
  SignUpFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_FAILURE)
  );
}

