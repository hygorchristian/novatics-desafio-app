import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  codeLoadRequest: ['code'],
  codeLoadSuccess: ['message'],
  codeLoadFailure: ['error'],
  codeReset: null,
});

export const CodeTypes = Types;
export const CodeActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  message: null,
  loading: false,
  error: null,
});

// Reducer Functions

const codeLoadRequest = state => ({ ...state, loading: true, error: null });

const codeLoadSuccess = (state, { message }) => ({
  ...state,
  message,
  loading: false,
  error: null,
});

const codeLoadFailure = (state, { error }) => ({
  ...state,
  error,
  loading: false,
  message: null,
});

const codeReset = () => ({ ...INITIAL_STATE });

// Reducer

export const CodeReducer = createReducer(INITIAL_STATE, {
  [Types.CODE_LOAD_REQUEST]: codeLoadRequest,
  [Types.CODE_LOAD_SUCCESS]: codeLoadSuccess,
  [Types.CODE_LOAD_FAILURE]: codeLoadFailure,
  [Types.CODE_RESET]: codeReset,
});
