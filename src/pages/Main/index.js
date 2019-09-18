import React from 'react';
import PropTypes from 'prop-types';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// Styles
import {
  Container, StickyHeader, ShippingAddress, QRCodeIcon, FakeSearchField,
  FakePlaceholder,
} from './styles';
// Components
import Button from '~/components/Common/Button';
import Typography from '~/components/Common/Typography';
import BannerSlider from '../../components/BannerSlider';
import PromoSlider from '~/components/PromoSlider';
import Section from '~/components/Common/Section';
import SingleBanner from '~/components/SingleBanner';
import CategorySlider from '~/components/CategorySlider';
import TopRestaurantSlider from '~/components/TopRestaurantSlider';
import RecentRestaurantSlider from '~/components/RecentRestaurantSlider';
import RestaurantList from '~/components/RestaurantList';
import Discount from '~/components/Discount';
// Images
import QRCodeImage from '../../assets/qr-code.png';
// Data
import data from '../../../data.json';

export default function Main({ navigation }) {
  return (
    <SafeAreaView>
      <Container
        stickyHeaderIndices={[1]} // component with index [1] is sticky
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
          <FakeSearchField
            onPress={() => navigation.navigate('Search')}
          >
            <Icon name="search" size={32} color="#e81010" />
            <FakePlaceholder
              size="18"
              color="#999"
            >
              Prato ou restaurante
            </FakePlaceholder>
          </FakeSearchField>
          <Button
            text="Filtros"
            textColor="#e81010"
          />
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
          <SingleBanner
            bannerUrl="https://dicasdalarica.files.wordpress.com/2016/03/00-banner-club-house-mc-donalds.jpg"
          />
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

Main.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
