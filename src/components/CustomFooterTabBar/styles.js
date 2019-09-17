import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  padding: 8px 8px 32px;
  border-top-color: #d7d7d7;
  border-top-width: 1px;
`;

export const TabItem = styled.TouchableOpacity`
  width: 80px;
  height: 40px;
  align-items: center;
`;

export const TabIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-bottom: 8px;
`;
