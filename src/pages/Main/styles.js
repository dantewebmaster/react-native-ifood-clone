import styled from 'styled-components/native';
// import Typography from '~/components/Common/Typography';
import { TypographyStyled } from '~/components/Common/Typography/styles';

export const Container = styled.ScrollView`
  background: #f1f1f1;
`;

export const ShippingAddress = styled.View`
  background: #fff;
  padding: 24px 16px 0;
  flex-direction: row;
  height: auto;
  align-items: center;
  justify-content: space-between;
`;

export const QRCodeIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const StickyHeader = styled.View`
  background: #fff;
  flex-direction: row;
  padding: 18px;
`;

export const FakeSearchField = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #f1f1f1;
  flex: 1;
  padding: 0 16px;
  height: 55px;
  align-items: center;
  border-radius: 4px;
`;

export const FakePlaceholder = styled(TypographyStyled)`
  margin-left: 16px;
`;
