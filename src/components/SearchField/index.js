import React from 'react';
import PropTypes from 'prop-types';
import { Container, SearchInput, SearchIcon } from './styles';
import SearchImage from '../../assets/search-icon.png';

export default function SearchField({
  placeholderText,
}) {
  return (
    <Container>
      <SearchIcon source={SearchImage} />
      <SearchInput
        placeholder={placeholderText}
        placeholderTextColor="#666"
        autoCorrect={false}
      />
    </Container>
  );
}

SearchField.propTypes = {
  placeholderText: PropTypes.string.isRequired,
};
