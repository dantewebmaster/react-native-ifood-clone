import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { paddingLeft: 16, paddingRight: 8 },
  showsHorizontalScrollIndicator: false,
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
  justify-content: space-between;
`;
