import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const placeHolderPicture = require('../assets/splash.png');

const ContactDetailsScreen = ({route}) => {
  const name = route.params?.name ?? '';
  const phone = route.params?.phone ?? '';
  const email = route.params?.email ?? '';
  const pictureUri = route.params?.picture?.medium ?? placeHolderPicture;
  const location = route.params?.location ?? '';
    return (
      <View style={styles.container}>
        <Image
          style={styles.picture}
          source={{ uri: pictureUri}}
        />
        <Text style={styles.item}>{name.first} {name.last}</Text>
        <Text style={styles.item}>{phone}</Text>
        <Text style={styles.item}>{email}</Text>
        <Text style={styles.item}>{location.street.number},{location.street.name} {location.city}</Text>
      </View>
    )
}

ContactDetailsScreen['navigationOptions'] = screenProps => ({
    title: 'Details'
})

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
