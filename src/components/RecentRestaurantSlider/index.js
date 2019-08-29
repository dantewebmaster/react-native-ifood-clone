import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, RecentRestaurantSliderItem, RecentRestaurantSliderLogo, LogoContainer,
} from './styles';
import { Typography } from '~/pages/Main/styles';

export default function RecentRestaurantSlider({
  data,
}) {
  return (
    <Container horizontal>
      {data.map((item) => (
        <RecentRestaurantSliderItem key={item.id}>
          <LogoContainer>
            <RecentRestaurantSliderLogo source={{ uri: item.logo }} />
          </LogoContainer>
          <Typography size="18" color="#333" bold>{item.title}</Typography>
        </RecentRestaurantSliderItem>
      ))}
    </Container>
  );
}

RecentRestaurantSlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
