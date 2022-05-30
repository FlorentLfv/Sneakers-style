import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';

import PRODUITS from './data';
import CustomCard from './components/Card';

export default function App() {

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Rechercher"
        style={styles.searchBar}
        iconColor='#3f93db'
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <FlatList
        data={PRODUITS}
        renderItem={({ item }) =>
          <CustomCard
            price={item.price}
            title={item.title}
            photo={item.photo}
            desc={item.desc}
            likes={item.likes}
            size={item.size}
          ></CustomCard>
        } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    borderWidth: 2,
    borderRadius: 0,
    borderColor: '#588ebc',
    margin: 15,
    marginTop: 45,
  },
});
