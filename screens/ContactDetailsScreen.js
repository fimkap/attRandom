import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const placeHolderPicture = require('../assets/splash.png');

/**
 * Display the contact details.
 *
 * @param route An object to provide the contact details
 */
const ContactDetailsScreen = ({ route }) => {
  const { name, location, email, phone, picture } = route.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.picture}
        source={{ uri: picture?.medium ?? placeHolderPicture }}
      />
      <Text style={styles.item}>
        {name?.first ?? ''} {name?.last ?? ''}
      </Text>
      <Text style={styles.item}>{phone ?? ''}</Text>
      <Text style={styles.item}>{email ?? ''}</Text>
      <Text style={styles.item}>
        {location?.street?.number ?? ''},{location?.street?.name ?? ''}{' '}
        {location?.city ?? ''}
      </Text>
    </View>
  );
};

export {ContactDetailsScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  picture: {
    width: 120,
    height: 120,
  },
});
