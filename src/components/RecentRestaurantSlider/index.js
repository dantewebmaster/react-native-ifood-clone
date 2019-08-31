import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  RecentRestaurantSliderList,
  RecentRestaurantSliderItem,
  RecentRestaurantSliderLogo,
  LogoContainer,
} from './styles';
import Typography from '~/components/Common/Typography';

export default function RecentRestaurantSlider({
  data,
}) {
  return (
    <Container>
      <RecentRestaurantSliderList
        horizontal
        data={data}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        renderItem={({ item }) => (
          <RecentRestaurantSliderItem key={item.id}>
            <LogoContainer>
              <RecentRestaurantSliderLogo source={{ uri: item.logo }} />
            </LogoContainer>
            <Typography size="18" color="#333" bold>{item.title}</Typography>
          </RecentRestaurantSliderItem>
        )}
      />
    </Container>
  );
}

RecentRestaurantSlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
