import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '../ducks/auth';
import { CodeTypes } from '../ducks/code';

import { loadAuth, logout } from './auth';
import { loadCode } from './code';

export default function*() {
  return yield all([
    takeLatest(AuthTypes.LOAD_AUTH_REQUEST, loadAuth),
    takeLatest(AuthTypes.LOGOUT, logout),
    takeLatest(CodeTypes.CODE_LOAD_REQUEST, loadCode),
  ]);
}
