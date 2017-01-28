'use strict';

import React, { Component } from 'react';
import ReactNative from 'react-native';
const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;
const styles = require('../style');
import firebaseApp from '../../db';

class ListItem extends Component {
  constructor (props) {
    super(props);
    this.itemsRef = this._getRef().child('partidos');
    this.state = {
      partidos: [],
      isHidden: true,
      isLoading: false
    };
  }

  _getRef () {
    return firebaseApp.database().ref();
  }

  _addItem (item) {
    this.itemsRef.push(item);
  }

  _handlePress (item) {
    this.setState({
      isHidden: !this.state.isHidden,
      isLoading: !this.state.isLoading
    });
    fetch(`https://api.football-data.org/v1/competitions/${item.id}/fixtures`, {
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
        partidos: data.fixtures,
        isLoading: !this.state.isLoading
      });
    })
    .done();
  }

  render () {
    return (
      <View>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item.caption}
          </Text>
          <TouchableOpacity style={styles.buttonFavTorneo} onPress={this.props.onPress}>
            <Text style={styles.buttonFavText}>Favorito</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFavTorneo} onPress={() => {
            this._handlePress(this.props.item);
          }}>
            <Text style={styles.buttonFavText}>{this.state.isLoading ? 'Cargando' : 'Partidos'}</Text>
          </TouchableOpacity>
        </View>
        {this.state.isHidden ? <View />
          : <View>
            {this.state.partidos.map((partido) => {
              return (
                <View style={styles.liFixture} key={partido.id}>
                  <Text
                    style={styles.liText}>
                    {partido.awayTeamName} vs {partido.homeTeamName}
                  </Text>
                  <TouchableOpacity
                    style={styles.buttonFav}
                    onPress={() => {
                      this._addItem(partido);
                    }}>
                    <Text style={styles.buttonFavText}>Favorito</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        }
      </View>
    );
  }
}

export default ListItem;
