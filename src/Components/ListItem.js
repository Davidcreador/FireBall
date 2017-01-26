'use strict';

import React, { Component } from 'react';
import ReactNative from 'react-native';
const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;
const styles = require('../style');

class ListItem extends Component {
  render () {
    return (
      <View>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item.caption}</Text>
          <TouchableOpacity style={styles.buttonFav} onPress={this.props.onPress}>
            <Text style={styles.buttonFavText}>Favorito</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ListItem;
