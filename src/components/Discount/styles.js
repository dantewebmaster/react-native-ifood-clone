import styled from 'styled-components/native';

export const Container = styled.View`
  border-width: 1px;
  border-bottom-width: 2px;
  border-color: #d9d9d9;
  border-bottom-color: #d1d1d1;
  margin: 0 16px 16px;
  padding: 16px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CouponImage = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;

export const Infos = styled.View`
  flex: 1;
`;

export const More = styled.Image`
  width: 16px;
  height: 16px;
`;
