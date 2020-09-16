import React  from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

/**
 * Implements a row element in the list.
 *
 *  @param props contact details
 */
const Row = props => (
  <TouchableOpacity style={styles.row} onPress={() => props.onSelectContact(props)}>
    <Text style={styles.item}>{props.name.first} {props.name.last}</Text>
  </TouchableOpacity>
)

export {Row};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  row: {
    padding: 20
  },
});
