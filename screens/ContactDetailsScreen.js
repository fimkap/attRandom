import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const placeHolderPicture = require('../assets/splash.png');

/**
 * Display the contact details.
 *
 * @param route An object to provide the contact details
 */
const ContactDetailsScreen = ({route}) => {
  const firstName = route.params?.name?.first ?? '';
  const lastName = route.params?.name?.last ?? '';
  const phone = route.params?.phone ?? '';
  const email = route.params?.email ?? '';
  const pictureUri = route.params?.picture?.medium ?? placeHolderPicture;
  const streetNumber = route.params?.location?.street?.number ?? '';
  const streetName = route.params?.location?.street?.name ?? '';
  const city = route.params?.location?.city ?? '';
    return (
      <View style={styles.container}>
        <Image
          style={styles.picture}
          source={{ uri: pictureUri}}
        />
        <Text style={styles.item}>{firstName} {lastName}</Text>
        <Text style={styles.item}>{phone}</Text>
        <Text style={styles.item}>{email}</Text>
        <Text style={styles.item}>{streetNumber},{streetName} {city}</Text>
      </View>
    )
}

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
