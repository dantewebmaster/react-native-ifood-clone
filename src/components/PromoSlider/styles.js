import styled from 'styled-components/native';

export const PromoSliderList = styled.FlatList.attrs({
  contentContainerStyle: { paddingLeft: 16, paddingRight: 8 },
  showsHorizontalScrollIndicator: false,
  bounces: false,
  horizontal: true,
})`
  background-color: #fff;
  padding-bottom: 24px;
`;

export const PromoSliderItem = styled.View`
  border: 1px solid #ddd;
  border-bottom-width: 3px;
  border-radius: 4px;
  width: 180px;
  overflow: hidden;
  margin-right: 10px;
`;

export const PromoSliderImage = styled.Image`
  width: 100%;
  height: 140px;
`;

export const PromoSliderTitle = styled.View`
  padding: 12px;
  flex: 1;
`;

export const PromoSliderFooter = styled.View`
  padding: 8px 12px 12px;
  flex-direction: row;
  align-items: center;
`;

export const SeeMoreButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 180px;
`;
