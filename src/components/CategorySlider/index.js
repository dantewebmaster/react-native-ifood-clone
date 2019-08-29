import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, CategorySliderItem, CategorySliderImage, CategorySliderTitle,
} from './styles';

import { Typography } from '~/pages/Main/styles';

export default function CategorySlider({
  data,
}) {
  return (
    <Container horizontal>
      {data.map((item) => (
        <CategorySliderItem key={item.id}>
          <CategorySliderImage source={{ uri: item.imageUrl }} />
          <CategorySliderTitle>
            <Typography size="16" color="#444" align="center">{item.title}</Typography>
          </CategorySliderTitle>
        </CategorySliderItem>
      ))}
    </Container>
  );
}

CategorySlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
