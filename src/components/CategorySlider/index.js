import React from 'react';
import PropTypes from 'prop-types';
import {
  CategorySliderList, CategorySliderItem, CategorySliderImage, CategorySliderTitle,
} from './styles';

import Typography from '~/components/Common/Typography';

export default function CategorySlider({
  data,
}) {
  return (
    <CategorySliderList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <CategorySliderItem key={item.id}>
          <CategorySliderImage source={{ uri: item.imageUrl }} />
          <CategorySliderTitle>
            <Typography size="16" color="#444" align="center">{item.title}</Typography>
          </CategorySliderTitle>
        </CategorySliderItem>
      )}
    />
  );
}

CategorySlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
