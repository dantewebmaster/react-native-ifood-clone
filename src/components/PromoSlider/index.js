import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, PromoSliderItem, PromoSliderImage, PromoSliderFooter, PromoSliderTitle,
} from './styles';
import { Typography } from '~/pages/Main/styles';

export default function PromoSlider({
  data,
}) {
  return (
    <Container horizontal>
      {data.map((item) => (
        <PromoSliderItem key={item.id}>
          <PromoSliderImage source={{ uri: item.imageUrl }} />
          <PromoSliderTitle>
            <Typography size="18" color="#333">{item.title}</Typography>
          </PromoSliderTitle>
          <PromoSliderFooter>
            <Typography size="18" color="green">R$ {item.promoPrice}</Typography>
            <Typography size="14" color="gray" strike>R$ {item.originalPrice}</Typography>
          </PromoSliderFooter>
        </PromoSliderItem>
      ))}
    </Container>
  );
}

PromoSlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
