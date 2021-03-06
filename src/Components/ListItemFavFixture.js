'use strict';

import React, { Component } from 'react';
import ReactNative from 'react-native';
const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;
const styles = require('../style');

class ListItemFavFixture extends Component {
  render () {
    console.log('FIX', this.props);
    return (
      <View>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item.awayTeam} vs {this.props.item.homeTeam}</Text>
          <TouchableOpacity style={styles.buttonFav} onPress={this.props.onPress}>
            <Text style={styles.buttonFavText}>Borrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ListItemFavFixture;
