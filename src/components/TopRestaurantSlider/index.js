import React from 'react';
import PropTypes from 'prop-types';
import {
  TopRestaurantSliderList, TopRestaurantSliderItem, Logo, TopRestaurantSliderTitle,
} from './styles';

import Typography from '~/components/Common/Typography';

export default function TopRestaurantSlider({
  data,
}) {
  return (
    <TopRestaurantSliderList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <TopRestaurantSliderItem key={item.id}>
          <Logo source={{ uri: item.logo }} />
          <TopRestaurantSliderTitle>
            <Typography size="16" color="#444" align="center">{item.title}</Typography>
          </TopRestaurantSliderTitle>
        </TopRestaurantSliderItem>
      )}
    />
  );
}

TopRestaurantSlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
