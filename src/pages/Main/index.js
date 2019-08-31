import React from 'react';

import {
  View, SafeAreaView, TouchableOpacity,
} from 'react-native';

import {
  Container, StickyHeader, ShippingAddress, Button, QRCodeIcon,
} from './styles';

import Typography from '~/components/Common/Typography';

import BannerSlider from '../../components/BannerSlider';
import PromoSlider from '~/components/PromoSlider';
import Section from '~/components/Section';
import SingleBanner from '~/components/SingleBanner';
import CategorySlider from '~/components/CategorySlider';
import TopRestaurantSlider from '~/components/TopRestaurantSlider';
import RecentRestaurantSlider from '~/components/RecentRestaurantSlider';
import RestaurantList from '~/components/RestaurantList';
import Discount from '~/components/Discount';
import SearchField from '~/components/SearchField';

import QRCodeImage from '../../assets/qr-code.png';

// Mock data
import data from '../../../data.json';

export default function Main() {
  return (
    <SafeAreaView>
      <Container
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        bounces={false}
        refreshing={false}
      >
        <ShippingAddress>
          <View>
            <Typography size="20" color="#999" uppercase>Entregar</Typography>
            <Typography size="18" color="#111">Av. Paulista, 1580</Typography>
          </View>
          <TouchableOpacity>
            <QRCodeIcon source={QRCodeImage} />
          </TouchableOpacity>
        </ShippingAddress>

        <StickyHeader>
          <SearchField
            placeholderText="Prato ou restaurante"
          />
          <Button>
            <Typography size="16" color="#e81010">Filtros</Typography>
          </Button>
        </StickyHeader>

        <Section
          noMargin
        >
          <Discount title="Cupom de R$10" desc="Válido até 26/08" />
          <BannerSlider horizontal data={data.banners} />
        </Section>

        <Section
          title="70% off + taxa na faixa"
          subTitle="Pratos com frete grátis"
          iconUrl="https://cdn3.iconfinder.com/data/icons/valentine-2065/1024/gift-512.png"
          buttonAction={() => {}}
        >
          <PromoSlider data={data.promos} />
        </Section>

        <Section
          title="Categorias"
        >
          <CategorySlider data={data.categories} />
        </Section>

        <Section
          title="Últimos restaurantes"
          buttonAction={() => {}}
        >
          <RecentRestaurantSlider data={data.topRestaurants} />
        </Section>

        <Section>
          <SingleBanner bannerUrl="https://dicasdalarica.files.wordpress.com/2016/03/00-banner-club-house-mc-donalds.jpg" />
        </Section>


        <Section
          title="Famosos no iFood"
          buttonAction={() => {}}
        >
          <TopRestaurantSlider data={data.topRestaurants} />
        </Section>

        <Section
          title="Restaurantes"
        >
          <RestaurantList data={data.restaurantList} />
        </Section>
      </Container>
    </SafeAreaView>
  );
}
