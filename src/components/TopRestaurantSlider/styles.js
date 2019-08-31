import styled from 'styled-components/native';

export const TopRestaurantSliderList = styled.FlatList.attrs({
  contentContainerStyle: { paddingLeft: 16, paddingRight: 8 },
  showsHorizontalScrollIndicator: false,
  bounces: false,
  horizontal: true,
})`
  background-color: #fff;
  padding-bottom: 24px;
`;

export const TopRestaurantSliderItem = styled.View`
  width: 110px;
  overflow: hidden;
  margin-right: 8px;
  align-items: center;
`;

export const Logo = styled.Image`
  border-width: 1px;
  border-color: #ccc;
  border-radius: 65px;
  width: 100px;
  height: 100px;
`;

export const TopRestaurantSliderTitle = styled.Text`
  padding: 12px 0 0;
  align-items: center;
  flex: 1;
`;
