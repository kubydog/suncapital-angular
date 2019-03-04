import {Transaction} from '../../model/transaction';
import {All, TransactionActionTypes} from './transaction.actions';

export interface State {
  transactions: Transaction[];
  currentTransaction: Transaction;
  errorMessage: string | null;
}

export const initialState: State = {
  transactions: null,
  currentTransaction: null,
  errorMessage: null
}

export function reducer(state = initialState, action: All) {
  switch (action.type) {
    case TransactionActionTypes.ADD_TRANSACTION_SUCCESS: {
      return {
        ...state,
        currentTransaction: action.payload,
        errorMessage: null
      };
    }
    case TransactionActionTypes.ADD_TRANSACTION_FAILURE: {
      return {
        ...state,
        errorMessage: 'Failed to add transaction'
      };
    }
    default: {
      return state;
    }
  }
}
