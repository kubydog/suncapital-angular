import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {TransactionService} from '../../service/transaction.service';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {
  AddTransaction,
  AddTransactionFailure,
  AddTransactionSuccess,
  GetById, GetByIdFailure,
  GetByIdSuccess, GetTransactions, GetTransactionsFailure, GetTransactionsSuccess,
  TransactionActionTypes
} from './transaction.actions';
import {catchError, switchMap, tap, map} from 'rxjs/operators';
import {trimTrailingNulls} from '@angular/compiler/src/render3/view/util';

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

  @Effect()
  GetById: Observable<any> = this.actions.pipe(
    ofType(TransactionActionTypes.GET_BY_ID),
    map( (action: GetById) => action.payload),
    switchMap( payload => {
      return this.transactionService.getById(payload.id).pipe(
        map(transaction => {
          return new GetByIdSuccess(transaction);
        }),
        catchError( error => {
          return of(new GetByIdFailure({error: error}));
        })
      );
    })
  );

  @Effect({dispatch: false})
  GetByIdSuccess: Observable<any> = this.actions.pipe(
    ofType(TransactionActionTypes.GET_BY_ID_SUCCESS)
  );

  @Effect({dispatch: false})
  GetByIdFailure: Observable<any> = this.actions.pipe(
    ofType(TransactionActionTypes.GET_BY_ID_FAILURE)
  );

  @Effect()
  GetTransactions: Observable<any> = this.actions.pipe(
    ofType(TransactionActionTypes.GET_TRANSACTIONS),
    map( (action: GetTransactions) => action.payload),
    switchMap( payload => {
      return this.transactionService.getTransactions(payload.firstName, payload.lastName).pipe(
        map( transactions => {
          return new GetTransactionsSuccess(transactions);
        }),
        catchError( error => {
          return of(new GetTransactionsFailure({error: error}));
        })
      );
    })
  );

  @Effect({dispatch: false})
  GetTransactionsSuccess: Observable<any> = this.actions.pipe(
    ofType(TransactionActionTypes.GET_TRANSACTIONS_SUCCESS)
  );

  @Effect({dispatch: false})
  GetTransactionsFailure: Observable<any> = this.actions.pipe(
    ofType(TransactionActionTypes.GET_TRANSACTIONS_FAILURE)
  );
}
