import React, { Component } from 'react';

import Navigator from './src/Navigator';

import { decode, encode } from 'base-64';
import { YellowBox } from 'react-native';

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

export default class App extends Component {
  constructor() {
    super();
    YellowBox.ignoreWarnings(["Setting a timer"])
  }
  render() {
    return (
      <Navigator />
    )
  }
}