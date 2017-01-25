/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ListView
} from 'react-native';
import * as firebase from 'firebase';
import config from './config/config';

// Components
import Header from './src/Components/Header';
import ListItem from './src/Components/ListItem';

// Firebase configuration
const firebaseApp = firebase.initializeApp(config.firebase);

const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });

export default class FireBall extends Component {
  constructor (props) {
    super(props);
    this.itemsRef = firebaseApp.database().ref();
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }

  componentDidMount () {
    fetch('https://api.football-data.org/v1/competitions/?season=2016', {
      method: 'GET',
      headers: {
        'X-Auth-Token': 'b14fea36d44d45608da38b9501015f20',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Response-Control': 'minified'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data)
      });
    })
    .done();
  }

  _handlePress (item) {
    console.log('ITEM', item);
  }

  _renderItem (item) {
    return (
      <ListItem item={item} onPress={() => {
        this._handlePress(item);
      }} />
    );
  }

  render () {
    if (this.state.dataSource.getRowCount() === 0) {
      return (
        <View style={styles.container}>
          <Text>
            loading....
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Header />
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderItem.bind(this)}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('FireBall', () => FireBall);
