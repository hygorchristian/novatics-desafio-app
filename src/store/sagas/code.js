import { call, put, select } from 'redux-saga/effects';
import Api from '~/services/Api';

import { CodeActions } from '../ducks/code';

export function* loadCode({ code }) {
  try {
    const user = yield select(state => state.auth.user);
    const response = yield call(Api.savePoint, user.id, code);

    if (response) {
      yield put(CodeActions.codeLoadSuccess('Points registered!'));
    }
  } catch (e) {
    yield put(CodeActions.codeLoadFailure('Invalid code, try again'));
  }
}
