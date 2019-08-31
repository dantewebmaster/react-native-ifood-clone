import React from 'react';
import PropTypes from 'prop-types';

import {
  SliderList, SliderItem, SliderImage,
} from './styles';
import Typography from '~/components/Common/Typography';

export default function BannerSlider({
  data,
}) {
  return (
    <SliderList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <SliderItem key={item.id}>
          <SliderImage source={{ uri: item.image }} />
          <Typography color="#333" size="18">{item.title}</Typography>
        </SliderItem>
      )}
    />
  );
}

BannerSlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
