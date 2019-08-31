import styled from 'styled-components/native';

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

export const AddressOptions = styled.View`
  flex-direction: column;
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

export const Button = styled.TouchableOpacity`
  height: 60px;
  background: #fff;
  width: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const Typography = styled.Text`
  font-size: ${(props) => props.size || 16}px;
  color: ${(props) => props.color || '#333'};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-decoration: ${(props) => (props.strike ? 'line-through' : 'none')};
  text-align: ${(props) => (props.align ? props.align : 'left')}
`;
