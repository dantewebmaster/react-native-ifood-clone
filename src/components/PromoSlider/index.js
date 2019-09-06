import React from 'react';
import PropTypes from 'prop-types';
import {
  PromoSliderList,
  PromoSliderItem,
  PromoSliderImage,
  PromoSliderFooter,
  PromoSliderTitle,
  SeeMoreButton,
} from './styles';
import Typography from '~/components/Common/Typography';
import { Separator } from '../RestaurantList/styles';

export default function PromoSlider({
  data,
}) {
  return (
    <PromoSliderList
      data={data}
      keyExtractor={(item) => String(item.id)}
      ListFooterComponent={(
        <SeeMoreButton>
          <Typography color="#e81010" size="16">Outros pratos</Typography>
        </SeeMoreButton>
      )}
      renderItem={({ item }) => (
        <PromoSliderItem>
          <PromoSliderImage source={{ uri: item.imageUrl }} />
          <PromoSliderTitle>
            <Typography size="18" color="#333">{item.title}</Typography>
          </PromoSliderTitle>
          <PromoSliderFooter>
            <Typography size="18" color="green">R$ {item.promoPrice}</Typography>
            <Separator />
            <Typography size="14" color="gray" strike>R$ {item.originalPrice}</Typography>
          </PromoSliderFooter>
        </PromoSliderItem>
      )}
    />
  );
}

PromoSlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
