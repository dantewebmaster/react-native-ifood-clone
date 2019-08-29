import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, SliderItem, SliderImage,
} from './styles';
import { Typography } from '~/pages/Main/styles';

export default function BannerSlider({
  data,
}) {
  return (
    <Container horizontal>
      {data && data.map((item) => (
        <SliderItem key={item.id}>
          <SliderImage source={{ uri: item.image }} />
          <Typography color="#333" size="18">{item.title}</Typography>
        </SliderItem>
      ))}
    </Container>
  );
}

BannerSlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
