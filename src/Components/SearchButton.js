import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../style';

const SearchButton = (props) => {
  console.log('PROPS', props);
  return (
    <TouchableOpacity style={styles.searchButton} onPress={props.fetchData}>
      <Text style={styles.buttonFavText}>Buscar Torneos</Text>
    </TouchableOpacity>
  );
};

export default SearchButton;
