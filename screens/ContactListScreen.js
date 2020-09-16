import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ContactListScreen = () => {
  const [data, setData] = useState([])
  const [lastPage, setLastPage] = useState(1)

  const incrementPageCount = () => {
    setLastPage(lastPage+1);
  }

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const results = await response.json();
        setData(data.concat(results.results));
      } catch(error) {
        console.error(error);
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
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name.first}, {item.name.last}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export {ContactListScreen};
