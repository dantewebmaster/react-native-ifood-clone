import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import {
  Container, SectionHeader, Left, Icon,
} from './styles';
import Button from '~/components/Common/Button';
import Typography from '~/components/Common/Typography';

export default function Section({
  title,
  subTitle,
  iconUrl,
  noMargin,
  buttonAction,
  children,
}) {
  return (
    <Container noMargin={noMargin}>
      {title && (
        <SectionHeader>
          <Left>
            {iconUrl
              && <Icon source={{ uri: iconUrl }} />}
            <View>
              <Typography bold color="#333" size="18">{title}</Typography>
              {subTitle
                && <Typography size="16" color="#999">{subTitle}</Typography>}
            </View>
          </Left>
          {buttonAction
            && (
              <Button text="Ver mais" />
            )}
        </SectionHeader>
      )}
      {children}
    </Container>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  iconUrl: PropTypes.string,
  noMargin: PropTypes.bool,
  buttonAction: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

Section.defaultProps = {
  title: null,
  subTitle: null,
  iconUrl: null,
  noMargin: false,
  buttonAction: null,
};
