import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {TransactionService} from '../../service/transaction.service';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AddTransaction, AddTransactionFailure, AddTransactionSuccess, TransactionActionTypes} from './transaction.actions';
import {catchError, switchMap, tap, map} from 'rxjs/operators';

@Injectable()
export class TransactionEffect {

  constructor(
    private actions: Actions,
    private transactionService: TransactionService,
    private router: Router
  ) {}

  @Effect()
  AddTransaction: Observable<any> = this.actions.pipe(
    ofType(TransactionActionTypes.ADD_TRANSACTION),
    map( (action: AddTransaction) => action.payload),
    switchMap( payload => {
      return this.transactionService.add(payload).pipe(
        map( transaction => {
          console.log('Add Transaction Success');
          return new AddTransactionSuccess(transaction);
        }),
        catchError( error => {
          console.log('Add Transaction Failure');
          return of(new AddTransactionFailure({error: error}));
        })
      );
    })
  );

  @Effect({dispatch: false})
  AddTransactionSuccess: Observable<any> = this.actions.pipe(
    ofType(TransactionActionTypes.ADD_TRANSACTION_SUCCESS),
    map( (action: AddTransactionSuccess) => action.payload),
    tap( payload => {
      this.router.navigateByUrl(`/app/transaction/${payload._id}`);
    })
  );

  @Effect({dispatch: false})
  AddTransactionFailure: Observable<any> = this.actions.pipe(
    ofType(TransactionActionTypes.ADD_TRANSACTION_FAILURE)
  );
}
