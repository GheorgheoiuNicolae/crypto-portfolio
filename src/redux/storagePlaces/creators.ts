import { firebaseDb } from '../../firebase';
import * as actions from './actions';

export const getExchanges = () => {
  return function (dispatch: any) {
    dispatch(actions.loadExchangesStart());
    firebaseDb.ref()
    .child(`storagePlaces/global`)
    .once('child_added', (snapshot: any) => {
      const exchanges = snapshot ? snapshot.val() : {};
      if(exchanges) {
        dispatch(actions.loadExchangesSuccess(exchanges));
      } else {
        if (exchanges === null) {
          dispatch(actions.loadExchangesSuccess([]));
        }
      }
    });
  };
};

export const getUsersStorageSpaces = (uid: any) => {
  return function (dispatch: any) {
    dispatch(actions.loadUserStorageSpacesStart());
    firebaseDb.ref()
    .child(`storagePlaces/userDefined/${uid}`)
    .once('value', (snapshot) => {
      const userStoraceSpaces = snapshot ? snapshot.val() : {};
      if(userStoraceSpaces) {
        dispatch(actions.loadUserStorageSpacesSuccess(userStoraceSpaces));
      } else {
        if (userStoraceSpaces === null) {
          dispatch(actions.loadUserStorageSpacesSuccess([]));
        }
      }
    });
  };
};

export const createUserStorage = (uid: string, storagePlace: any) => {
  return function (dispatch: any) {
    let storagePlacesRef: any = firebaseDb
      .ref()
      .child(`storagePlaces/userDefined${uid}`)
      .push();

    let key = storagePlacesRef.getKey();
    storagePlace.id = key;
    storagePlacesRef.set(storagePlace, function(error: any) {
      if(error) {
        dispatch(actions.createUserStorageError(error));
      } else {
        dispatch(actions.createUserStorageSuccess(storagePlace));
      }
    });
  };
};
