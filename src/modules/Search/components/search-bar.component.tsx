import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
// @ts-ignore
import styled from 'styled-components/native';

import Icon from '../../../shared/components/Icon/icon.component';

const Container = styled.View`
  margin-vertical: 10px;
  margin-horizontal: 20px;
`;

const SearchBarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #e5e5e5;
  border-radius: 20px;
  padding-vertical: 10px;
  padding-horizontal: 10px;
`;

const Input = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  font-weight: 700;
`;

const Separator = styled.View`
  width: 1px;
  height: 24px;
  background-color: #ccc;
  margin-right: 10px;
`;

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // handle search functionality
  };

  const handleFilter = () => {
    // handle filter functionality
  };

  return (
    <Container>
      <SearchBarWrapper>
        <Icon name={'search'} width={20} height={20} stroke={'#181818'} />
        <Input
          placeholder="Search"
          value={searchQuery}
          onChangeText={(text: string) => setSearchQuery(text)}
          onSubmitEditing={handleSearch}
          placeholderTextColor="#6b6b6b"
        />
        <Separator />
        <TouchableOpacity onPress={handleFilter}>
          <Icon name={'filter'} width={20} height={20} stroke={'#181818'} />
        </TouchableOpacity>
      </SearchBarWrapper>
    </Container>
  );
};

export default SearchBar;
