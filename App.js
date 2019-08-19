/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/Store'
import { createAppContainer } from "react-navigation";
import { AppNavigator }  from "./src/Router"
import NavigationService from './src/NavigationService';
const AppContainer = createAppContainer(AppNavigator);
const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
        <AppContainer 
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
  );
};
export default App;
