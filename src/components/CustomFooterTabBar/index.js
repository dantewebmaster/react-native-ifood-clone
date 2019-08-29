import React from 'react';
import {
  Container, TabItem, TabIcon, TabTitle,
} from './styles';

import Home from '~/assets/home.png';
import SearchBlack from '~/assets/search-black.png';
import Orders from '~/assets/order.png';
import Profile from '~/assets/profile.png';

export default function CustomFooterTabBar() {
  return (
    <Container>
      <TabItem>
        <TabIcon source={Home} />
        <TabTitle>Início</TabTitle>
      </TabItem>
      <TabItem>
        <TabIcon source={SearchBlack} />
        <TabTitle>Busca</TabTitle>
      </TabItem>
      <TabItem>
        <TabIcon source={Orders} />
        <TabTitle>Pedidos</TabTitle>
      </TabItem>
      <TabItem>
        <TabIcon source={Profile} />
        <TabTitle>Perfil</TabTitle>
      </TabItem>
    </Container>
  );
}
