'use strict';

import React, { Component } from 'react';
import ReactNative from 'react-native';
const {
  View,
  Text,
  TouchableHighlight
} = ReactNative;

class ListItem extends Component {
  render () {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View>
          <Text>{this.props.item.league}</Text>
          <Text>{this.props.item.caption}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ListItem;
