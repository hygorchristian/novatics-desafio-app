import { call, put } from 'redux-saga/effects';
import jwtService from '~/services/jwtService';
// import { login } from '../../services/api';

import { AuthActions } from '../ducks/auth';

export function* loadAuth({ username }) {
  try {
    console.log({ username });
    const response = yield call(jwtService.login, username);
    yield put(AuthActions.loadAuthSuccess(response));
  } catch (e) {
    console.log({ e });
    yield put(AuthActions.loadAuthFailure('Invalid user, try again'));
  }
}

export function* logout({ username }) {
  yield call(jwtService.logout);
}
