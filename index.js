/**
 * @format
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//app native forms
import LoginForm from './src/components/forms/login_form'

export default class Demo extends Component {
  render() {
    return (
      
      <LoginForm />
    );
  }
}

AppRegistry.registerComponent(appName, () => Demo);
