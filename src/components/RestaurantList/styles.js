import styled from 'styled-components/native';

export const RestaurantListContainer = styled.FlatList`
  padding: 0 16px;
`;

export const RestaurantListItem = styled.View`
  border-color: #d9d9d9;
  border-width: 1px;
  border-bottom-width: 3px;
  margin-bottom: 16px;
  flex-direction: row;
  border-radius: 5px;
`;

export const LogoContainer = styled.View`
  border-right-width: 1px;
  border-right-color: #d9d9d9;
  padding: 24px;
`;

export const Logo = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 60px;
`;

export const Infos = styled.View`
  padding: 8px 16px;
  justify-content: space-around;
`;

export const RestaurantDetails = styled.View`
  flex-direction: row;
`;

export const DeliveryDetails = styled.View`
  margin-top: 16px;
  flex-direction: row;
`;

export const Separator = styled.Text`
  color: #666;
  margin: 0 4px;
  margin-top: 2px;
`;
