import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import styles from '../style';

import ListItemFavFixture from './ListItemFavFixture';

const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });

class PartidosFav extends Component {
  constructor (props) {
    super(props);
    this.itemsRef = this._getRef().child('partidos');
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }

  componentDidMount () {
    this.listenForItems(this.itemsRef);
  }

  listenForItems (itemsRef) {
    itemsRef.on('value', (snap) => {
      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          awayTeam: child.val().awayTeamName,
          homeTeam: child.val().homeTeamName,
          _key: child.key
        });
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    });
  }

  _getRef () {
    return this.props.firebaseApp.database().ref();
  }

  _renderFav (item) {
    return (
      <ListItemFavFixture item={item} onPress={() => {
        this._handlePress(item);
      }} />
    );
  }

  _handlePress (item) {
    this.itemsRef.child(item._key).remove();
  }

  render () {
    if (this.state.dataSource.getRowCount() === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.loading}>No hay partidos favoritos</Text>
        </View>
      );
    } else {
      return (
        <ListView
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={this._renderFav.bind(this)}
          style={styles.listview}
        />
      );
    }
  }
}

export default PartidosFav;
