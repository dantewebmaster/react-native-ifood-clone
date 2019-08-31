import React from 'react';
import PropTypes from 'prop-types';
import {
  RestaurantListContainer,
  RestaurantListItem,
  LogoContainer,
  Logo,
  Infos,
  RestaurantDetails,
  DeliveryDetails,
  Separator,
} from './styles';
import Typography from '~/components/Common/Typography';

export default function RestaurantList({
  data,
}) {
  return (
    <RestaurantListContainer
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <RestaurantListItem key={item.id}>
          <LogoContainer>
            <Logo source={{ uri: item.logo }} />
          </LogoContainer>
          <Infos>
            <Typography size="18" color="#333" bold>{item.title}</Typography>
            <RestaurantDetails>
              <Typography color="#dab36d" size="18" bold>4,6</Typography>
              <Separator>•</Separator>
              <Typography size="18" color="#999">Chinesa - 0,4 km</Typography>
            </RestaurantDetails>
            <DeliveryDetails>
              <Typography size="16" color="#999">40-50 min</Typography>
              <Separator>•</Separator>
              <Typography size="16" color="#999">R$6,90</Typography>
            </DeliveryDetails>
          </Infos>
        </RestaurantListItem>
      )}
    />
  );
}

RestaurantList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
