import React from 'react';
import PropTypes from 'prop-types';
import { TypographyStyled } from './styles';

export default function Typography({
  size,
  color,
  align,
  bold,
  uppercase,
  strike,
  children,
}) {
  return (
    <TypographyStyled
      size={size}
      color={color}
      align={align}
      bold={bold}
      uppercase={uppercase}
      strike={strike}
    >
      {children}
    </TypographyStyled>
  );
}

Typography.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string,
  align: PropTypes.string,
  bold: PropTypes.bool,
  uppercase: PropTypes.bool,
  strike: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

Typography.defaultProps = {
  color: '#000',
  align: 'left',
  bold: false,
  uppercase: false,
  strike: false,
};
