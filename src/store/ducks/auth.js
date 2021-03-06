import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  loadAuthRequest: ['username'],
  loadAuthSuccess: ['data'],
  loadAuthFailure: ['error'],
  setJwtToken: ['token'],
  logout: null,
});

export const AuthTypes = Types;
export const AuthActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  isAuth: false,
  user: null,
  loading: false,
  error: null,
  token: null,
});

// Reducer Functions

const loadRequest = state => ({ ...state, loading: true, error: null });
const loadSuccess = (state, { data }) => ({
  ...state,
  isAuth: true,
  user: data,
  loading: false,
  error: null,
});
const loadFailure = (state, { error }) => ({ ...state, error, loading: false });
const logout = state => ({
  ...state,
  error: null,
  loading: false,
  user: null,
  isAuth: false,
});

const setJwtToken = (state, { token }) => ({ ...state, token });

// Reducer

export const AuthReducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_AUTH_REQUEST]: loadRequest,
  [Types.LOAD_AUTH_SUCCESS]: loadSuccess,
  [Types.LOAD_AUTH_FAILURE]: loadFailure,
  [Types.SET_JWT_TOKEN]: setJwtToken,
  [Types.LOGOUT]: logout,
});
