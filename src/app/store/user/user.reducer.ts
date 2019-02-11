import {User} from '../../model/user';
import {All, AuthActionTypes} from './user.actions';

export interface State {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.SIGNIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.email,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          isAdmin: action.payload.isAdmin
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.SIGNIN_FAILURE: {
      return {
        ...state,
        errorMessage: 'Incorrect email or password.'
      };
    }
    case AuthActionTypes.SIGNUP: {
      return {
        ...state,
        isAuthenticated: false,
        user: {
          token: action.payload.token,
          email: action.payload.email
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.SIGNUP_FAILURE: {
      return {
        ...state,
        errorMessage: 'That email is already in use.'
      };
    }
    default: {
      return state;
    }
  }
}
