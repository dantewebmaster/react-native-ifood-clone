import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, TopRestaurantSliderItem, Logo, TopRestaurantSliderTitle,
} from './styles';

import { Typography } from '~/pages/Main/styles';

export default function TopRestaurantSlider({
  data,
}) {
  return (
    <Container horizontal>
      {data.map((item) => (
        <TopRestaurantSliderItem key={item.id}>
          <Logo source={{ uri: item.logo }} />
          <TopRestaurantSliderTitle>
            <Typography size="16" color="#444" align="center">{item.title}</Typography>
          </TopRestaurantSliderTitle>
        </TopRestaurantSliderItem>
      ))}
    </Container>
  );
}

TopRestaurantSlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
