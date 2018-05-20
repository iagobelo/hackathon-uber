import axios from 'axios';
import { GET_AUTHORIZATIONS_SUCCESS } from './ActionTypes';
import { showLoad, hideLoad } from './AppActions';

const getAuthorizationsSuccess = (payload, dispatch) => dispatch({
  type: GET_AUTHORIZATIONS_SUCCESS,
  payload,
});

export const getAuthorizations = () => async (dispatch) => {
  try {
    showLoad(dispatch);
    const { data } = await axios.get('authorization');
    getAuthorizationsSuccess(data, dispatch);
    hideLoad(dispatch);
  } catch (err) {
    hideLoad(dispatch);
    throw err;
  }
};

export const x = 0;
