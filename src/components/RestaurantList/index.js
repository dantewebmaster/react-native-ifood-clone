import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  RestaurantListItem,
  LogoContainer,
  Logo,
  Infos,
  RestaurantDetails,
  DeliveryDetails,
  Separator,
} from './styles';
import { Typography } from '~/pages/Main/styles';

export default function RestaurantList({
  data,
}) {
  return (
    <Container>
      {data.map((item) => (
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
      ))}
    </Container>
  );
}

RestaurantList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
