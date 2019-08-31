import styled from 'styled-components/native';

export const Container = styled.View`
  padding-bottom: 24px;
`;

export const RecentRestaurantSliderList = styled.FlatList.attrs({
  contentContainerStyle: { paddingLeft: 16, paddingRight: 8 },
})`
  background-color: #fff;
`;

export const RecentRestaurantSliderItem = styled.View`
  border: 1px solid #ddd;
  border-bottom-width: 3px;
  border-radius: 6px;
  width: 320px;
  overflow: hidden;
  margin-right: 10px;
  flex-direction: row;
  align-items: center;
`;

export const LogoContainer = styled.View`
  border-right-width: 1px;
  border-right-color: #d7d7d7;
  padding: 16px;
  margin-right: 16px;
`;

export const RecentRestaurantSliderLogo = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border-width: 1px;
  border-color: #d7d7d7;
`;
