import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Provider as PaperProvider } from 'react-native-paper';

import Routes from './config/routes';
import rootReducer from './reducers/index';
import AppContainer from './containers/AppContainer';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => (
  <Provider store={store}>
    <AppContainer>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </AppContainer>
  </Provider>
);

export default App;
