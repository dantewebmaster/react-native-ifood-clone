import React from 'react';
import PropTypes from 'prop-types';
import Typography from '~/components/Common/Typography';
import { StyledButton } from './styles';

export default function Button({
  text,
  textColor,
  onPressHandler,
}) {
  return (
    <StyledButton onPress={onPressHandler}>
      <Typography size="16" color={textColor}>{text}</Typography>
    </StyledButton>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  onPressHandler: PropTypes.func,
};

Button.defaultProps = {
  textColor: '#e81010',
  onPressHandler: () => null,
};
