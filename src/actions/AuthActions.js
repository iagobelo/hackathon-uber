import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { Permissions, Notifications } from 'expo';

import { LOGIN_SUCCESS } from './ActionTypes';
import { setApiToken } from '../config/api';
import { sleep } from '../utils/general';
import { showLoad, hideLoad } from './AppActions';

const SESSION_KEY = 'session3-key';
const TOKEN_KEY = 'token-key';
const SLEEP_TIME = 3000;

const loginSuccess = (payload, dispatch) => dispatch({ type: LOGIN_SUCCESS, payload });

const setToken = async (token) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (err) {
    throw err;
  }
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    return token;
  } catch (err) {
    throw err;
  }
};

export const login = (form, { navigate }) => async (dispatch) => {
  try {
    showLoad(dispatch);
    const { data } = await axios.post('authenticate', form);
    await setToken(data.token);
    setApiToken(data.token);

    const { data: perfil } = await axios.get('me');
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      return;
    }

    const notificationToken = await Notifications.getExpoPushTokenAsync();
    await axios.put(`user/${perfil['_id']}`, { gcm: notificationToken });

    loginSuccess(perfil, dispatch);
    await AsyncStorage.setItem(SESSION_KEY, 'true');
    navigate('UserMain');
    hideLoad(dispatch);
  } catch (err) {
    hideLoad(dispatch);
    throw err;
  }
};

export const signUp = (form, { navigate }) => async (dispatch) => {
  try {
    showLoad(dispatch);
    await axios.post('user', form);
    await login(form, { navigate })(dispatch);
    hideLoad(dispatch);
  } catch (err) {
    hideLoad(dispatch);
    throw err;
  }
};

export const checkSession = ({ navigate }) => async () => {
  try {
    await sleep(SLEEP_TIME);
    const value = await AsyncStorage.getItem(SESSION_KEY);

    if (value === 'true') {
      const token = await getToken();
      await setApiToken(token);
      navigate('UserMain');
    }
    navigate('UserMain');
  } catch (err) {
    throw err;
  }
};

export const logout = ({ navigate }) => async () => {
  try {
    await AsyncStorage.setItem(SESSION_KEY, 'false');
    navigate('SignIn');
  } catch (err) {
    throw err;
  }
};
