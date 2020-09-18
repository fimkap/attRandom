import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Row } from '../components/Row';
import { API_URL } from '../constants/Network';
import { alertOfErrorWithRetry } from '../AlertOfError';

/** limit the number of results returned */
const COUNT_OF_RESULTS = 10;
/** how far from the end of the list to trigger update */
const ON_END_REACHED_THRESHOLD = 0.5;

/**
 * Fetches randomized contacts.
 * Display the contacts in a list with the update on scroll.
 *
 * @component
 */
const ContactListScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [lastPage, setLastPage] = useState(1);

  const incrementPageCount = () => {
    setLastPage(lastPage + 1);
  };

  /**
   * Navigates to a contact details screen
   *  when a specific contact has been selected.
   *
   * @param {Object} contact Selected contact information
   */
  const handleSelectContact = (contact) => {
    navigation.push('Details', contact);
  };

  useEffect(() => {
    /**
     * Fetches the next batch of contacts
     *
     *  @return {Promise} Promise
     */
    async function fetchContacts() {
      try {
        const response = await fetch(API_URL + '?results=' + COUNT_OF_RESULTS);
        const jsonResponse = await response.json();
        setData(data.concat(jsonResponse.results));
      } catch (error) {
        alertOfErrorWithRetry(
            'Failed to fetch contacts',
            error,
            incrementPageCount,
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
};

export {ContactListScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
