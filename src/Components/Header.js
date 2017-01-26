'use strict';

import React, { Component } from 'react';
import ReactNative from 'react-native';
const {
  View,
  Text
} = ReactNative;
const styles = require('../style');

class Header extends Component {
  render () {
    return (
      <View>
        <View style={styles.statusbar} />
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

export default Header;
