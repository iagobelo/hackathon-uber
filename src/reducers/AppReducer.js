import { SHOW_LOAD, HIDE_LOAD } from '../actions/ActionTypes';

const INITIAL_STATE = {
  isLoading: false,
};

export default (state = INITIAL_STATE, { type }) => ({
  [SHOW_LOAD]: { ...state, isLoading: true },
  [HIDE_LOAD]: { ...state, isLoading: false },
})[type] || state;
