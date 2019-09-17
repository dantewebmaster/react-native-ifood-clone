import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import { Container, SearchInput } from './styles';

export default function SearchField({
  placeholderText,
  onFocusHandler,
  autoFocus,
}) {
  return (
    <Container>
      <Icon name="search" size={32} color="#e81010" />
      <SearchInput
        placeholder={placeholderText}
        placeholderTextColor="#666"
        autoCorrect={false}
        onFocus={onFocusHandler}
        autoFocus={autoFocus}
      />
    </Container>
  );
}

SearchField.propTypes = {
  placeholderText: PropTypes.string.isRequired,
  onFocusHandler: PropTypes.func,
  autoFocus: PropTypes.bool,
};

SearchField.defaultProps = {
  onFocusHandler: () => null,
  autoFocus: false,
};
