import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from '../../../shared/components/Icon/icon.component';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // handle search functionality
  };

  const handleFilter = () => {
    // handle filter functionality
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name={'search'} width={20} height={20} stroke={'#181818'} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
          onSubmitEditing={handleSearch}
          placeholderTextColor="#6b6b6b"
        />
        <View style={styles.separator} />
        <TouchableOpacity onPress={handleFilter}>
          <Icon name={'filter'} width={20} height={20} stroke={'#181818'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontWeight: '700',
  },
  separator: {
    width: 1,
    height: 24,
    backgroundColor: '#ccc',
    marginRight: 10,
  },
});

export default SearchBar;
