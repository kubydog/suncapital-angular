import {Client} from '../../model/client';
import {All, ClientActionTypes} from './client.actions';

export interface State {
  clients: Client[] | null;
  currentClient: Client | null;
  errorMessage: string | null;
}

export const initialState: State = {
  clients: null,
  currentClient: null,
  errorMessage: null
}

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case ClientActionTypes.ADD_SUCCESS: {
      return {
        ...state,
        currentClient: action.payload,
        errorMessage: null
      };
    }
    case ClientActionTypes.ADD_FAILURE: {
      return {
        ...state,
        errorMessage: 'Failed to add client'
      };
    }
    default: {
      return state;
    }
  }
}
