import { GET_AUTHORIZATIONS_SUCCESS } from '../actions/ActionTypes';

const INITIAL_STATE = {
  authorizations: [],
};

export default (state = INITIAL_STATE, { type, payload }) => ({
  [GET_AUTHORIZATIONS_SUCCESS]: { ...state, authorizations: payload },
})[type] || state;
