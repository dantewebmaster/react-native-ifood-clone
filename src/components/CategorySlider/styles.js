import styled from 'styled-components/native';

export const CategorySliderList = styled.FlatList.attrs({
  contentContainerStyle: { paddingLeft: 16, paddingRight: 8 },
  showsHorizontalScrollIndicator: false,
  bounces: false,
  horizontal: true,
})`
  background-color: #fff;
  padding-bottom: 24px;
`;

export const CategorySliderItem = styled.View`
  width: 110px;
  overflow: hidden;
  margin-right: 8px;
`;

export const CategorySliderImage = styled.Image`
  border-radius: 4px;
  width: 100%;
  height: 90px;
`;

export const CategorySliderTitle = styled.View`
  padding: 12px 0 0;
  align-items: center;
`;
