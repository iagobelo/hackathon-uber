import { LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/ActionTypes';

const INITIAL_STATE = {
  isLoggedIn: false,
  perfil: undefined,
};

export default () => (state = INITIAL_STATE, { type, payload }) => ({
  [LOGIN_SUCCESS]: { ...state, perfil: payload },
  [LOGIN_FAILED]: state,
})[type] || state;
