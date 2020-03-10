import React, { Component } from 'react';

import Navigator from './src/Navigator';

import { decode, encode } from 'base-64';

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

console.ignoredYellowBox = ['Setting a timer']

export default class App extends Component {
  render() {
    return (
      <Navigator />
    )
  }
}