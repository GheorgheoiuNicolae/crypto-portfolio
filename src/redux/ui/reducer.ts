import * as types from './types';
import * as authTypes from '../auth/types';
import { initialState } from './initialState';
import { UiState } from './interface';

export default function reducer(state: UiState = initialState, action: any) {
  switch (action.type) {

    case types.SHOW_MODAL: {
      switch(action.payload) {
        case 'deleteEntry': {
          return {
            ...state,
            activeModal: action.payload,
          };
        }
        default: {
          return { ...state };
        }
      }
    }

    case types.HIDE_MODAL: {
      switch(action.payload) {
        case 'deleteEntry': {
          return {
            ...state,
            activeModal: null,
          };
        }
        case 'requestAuth': {
          return {
            ...state,
            activeModal: null,
          };
        }
        default: {
          return { ...state };
        }
      }
    }

    case authTypes.REQUEST_AUTH: {
      return {
        ...state,
        activeModal: 'requestAuth'
      };
    }

    default: {
      return { ...state };
    }
  }
}