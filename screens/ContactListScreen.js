import React, {useState, useEffect} from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import {Row} from '../components/Row';
import { API_URL, ON_END_REACHED_THRESHOLD } from '../constants/Constants';

/**
 * Fetches randomized contacts.
 * Display the contacts in a list with the update on scroll.
 *
 * @param navigation
 */
const ContactListScreen = ({navigation}) => {
  const [data, setData] = useState([])
  const [lastPage, setLastPage] = useState(1)

  const incrementPageCount = () => {
    setLastPage(lastPage+1);
  }

  /**
   * Navigates to a contact details screen
   *  when a specific contact has been selected.
   *
   * @param contact Selected contact information
   */
  const handleSelectContact = contact => {
    navigation.push('Details', contact);
  }

  /**
   * Fetches the next batch of contacts initially and
   *  when scrolling toward the end of the list.
   *
   * @param contact Selected contact information
   */
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(API_URL);
        const jsonResponse = await response.json();
        setData(data.concat(jsonResponse.results));
      } catch (error) {
        Alert.alert(
          'Failure',
          'Failed to fetch contacts: ' + error,
          [
            {
              text: 'Retry',
              onPress: () => incrementPageCount(),
            },
            { text: 'Close', onPress: () => {} },
          ],
          { cancelable: false }
        );
      }
    }
    fetchContacts();
  }, [lastPage]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.phone}
        onEndReached={incrementPageCount}
        onEndReachedThreshold={ON_END_REACHED_THRESHOLD}
        renderItem={({ item }) => (
          <Row contact={{...item}} onSelectContact={handleSelectContact} />
        )}
      />
    </View>
  );
}

export {ContactListScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
