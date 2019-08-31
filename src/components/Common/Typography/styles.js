import styled from 'styled-components/native';

export const TypographyStyled = styled.Text`
  font-size: ${(props) => props.size || 16}px;
  color: ${(props) => props.color || '#333'};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-decoration: ${(props) => (props.strike ? 'line-through' : 'none')};
  text-align: ${(props) => (props.align ? props.align : 'left')}
`;
