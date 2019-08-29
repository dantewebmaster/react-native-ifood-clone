import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f1f1f1;
  flex-direction: row;
  align-items: center;
  height: 55px;
  border-radius: 4px;
`;

export const SearchIcon = styled.Image`
  width: 32px;
  height: 32px;
  margin-left: 16px;
`;

export const SearchInput = styled.TextInput`
  height: 40px;
  padding: 16px;
  font-size: 18px;
`;
