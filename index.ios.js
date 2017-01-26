/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  ListView
} from 'react-native';
import * as firebase from 'firebase';
import TabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

// My modules
import config from './config/config';
const styles = require('./src/style');

// Components
import SearchButton from './src/Components/SearchButton';
import Favorites from './src/Components/Favorites';
import ListItem from './src/Components/ListItem';

// Firebase configuration
const firebaseApp = firebase.initializeApp(config.firebase);

const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });

export default class FireBall extends Component {
  constructor (props) {
    super(props);
    this.itemsRef = this._getRef().child('torneos');
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }

  _getRef () {
    return firebaseApp.database().ref();
  }

  fetchData () {
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
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data)
      });
    })
    .done();
  }

  _handlePress (item) {
    this.itemsRef.push({ title: item.league });
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
          <SearchButton fetchData={this.fetchData.bind(this)} />
        </View>
      );
    } else {
      return (
        <TabView
          style={[styles.container, { marginTop: 20 }]}
          renderTabBar={() => <DefaultTabBar />}>
          <ListView
            tabLabel={'Torneos'}
            dataSource={this.state.dataSource}
            renderRow={this._renderItem.bind(this)}
            style={styles.listview}
          />
          <Favorites
            firebaseApp={firebaseApp}
            tabLabel={'Favoritos'}
          />
        </TabView>
      );
    }
  }
}

AppRegistry.registerComponent('FireBall', () => FireBall);
