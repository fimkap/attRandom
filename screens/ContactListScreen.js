import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const Row = props => (
  <TouchableOpacity style={styles.row} onPress={() => props.onSelectContact(props)}>
    <Text style={styles.item}>{props.name.first} {props.name.last}</Text>
  </TouchableOpacity>
)


const ContactListScreen = ({navigation}) => {
  const [data, setData] = useState([])
  const [lastPage, setLastPage] = useState(1)

  const incrementPageCount = () => {
    setLastPage(lastPage+1);
  }

  const handleSelectContact = contact => {
    navigation.push('Details', contact);
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
        renderItem={({item}) => <Row {...item} onSelectContact={handleSelectContact} />}
      />
    </View>
  );
}

ContactListScreen['navigationOptions'] = screenProps => ({
    title: 'Contacts'
})

export {ContactListScreen};

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
  row: {
    padding: 20
  },
});
