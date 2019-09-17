import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  margin: ${(props) => (props.noMargin ? 0 : '16px 0 0')};
`;

export const SectionHeader = styled.View`
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 0;
`;

export const Left = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Icon = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  align-self: flex-start;
`;
