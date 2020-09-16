import React, {useState, useEffect} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
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
      } catch(error) {
        throw new Error('Network request failed');
      }
    }
    fetchContacts();
  }, [lastPage])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.value}
        onEndReached={incrementPageCount}
        onEndReachedThreshold={ON_END_REACHED_THRESHOLD}
        renderItem={({item}) => <Row {...item} onSelectContact={handleSelectContact} />}
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
