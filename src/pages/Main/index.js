import React from 'react';

import {
  View, SafeAreaView,
} from 'react-native';

// import { } from 'react-navigation';
import {
  Container, StickyHeader, ShippingAddress, Button, Typography,
  // AddressOptions,
  QRCodeButton, QRCodeIcon,
} from './styles';

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
const data = {
  banners: [
    {
      id: '4',
      title: 'Taxa na faixa pra você',
      image: 'https://images.rappi.com.br/mobile_promotions/store_5478.png?d=400x400',
    },
    {
      id: '2',
      title: 'Lorem ipsum dolor sit amet',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1L6Ge464KfSWTMi88SI6aKU4KUEFoSWlreeR7S7k09Te-y-_7A',
    },
    {
      id: '3',
      title: 'Taxa na faixa pra você',
      image: 'http://dongiuseppepizzabar.com.br/wp-content/uploads/2019/02/Banner-Pizza-banner-site.jpg',
    },
  ],
  promos: [
    {
      id: 1111,
      title: 'Temaki salmão cru.',
      originalPrice: '19,99',
      promoPrice: '9,90',
      imageUrl: 'https://source.unsplash.com/180x141/?temaki',
    },
    {
      id: 2222,
      title: 'Hot roll salmão unidade.',
      originalPrice: '39,99',
      promoPrice: '25,60',
      imageUrl: 'https://source.unsplash.com/180x141/?sushi',
    },
    {
      id: 3333,
      title: 'Xtreme insane barbecue',
      originalPrice: '39,99',
      promoPrice: '25,60',
      imageUrl: 'https://source.unsplash.com/180x141/?hamburger',
    },
    {
      id: 4444,
      title: 'Churrasco para dois',
      originalPrice: '39,99',
      promoPrice: '25,60',
      imageUrl: 'https://source.unsplash.com/180x141/?barbecue',
    },
    {
      id: 5555,
      title: 'Pizza tudo em cima.',
      originalPrice: '39,99',
      promoPrice: '25,60',
      imageUrl: 'https://source.unsplash.com/180x141/?pizza',
    },
  ],
  categories: [
    {
      id: 11,
      title: 'Bebidas',
      imageUrl: 'https://source.unsplash.com/100x60/?beer,coke,cup',
    },
    {
      id: 22,
      title: 'Saudável',
      imageUrl: 'https://source.unsplash.com/100x60/?salad',
    },
    {
      id: 33,
      title: 'Lanches',
      imageUrl: 'https://source.unsplash.com/100x60/?hamburger',
    },
    {
      id: 44,
      title: 'Pizza',
      imageUrl: 'https://source.unsplash.com/100x60/?pizza',
    },
    {
      id: 55,
      title: 'Árabe',
      imageUrl: 'https://source.unsplash.com/100x60/?chinese,food',
    },
  ],
  topRestaurants: [
    {
      id: 1212,
      title: 'Amaros Grill',
      logo: 'http://amarostable.com/wp-content/uploads/2018/04/amaros_logo.png',
    },
    {
      id: 1313,
      title: 'Asia Express',
      logo: 'https://s3-sa-east-1.amazonaws.com/delivery-direto/img/stores/59a6d111e88bf.png',
    },
    {
      id: 1515,
      title: 'TX Burger',
      logo: 'https://s3-sa-east-1.amazonaws.com/delivery-direto/img/stores/5b4cb8ebf0e91.png',
    },
    {
      id: 1414,
      title: 'Fábrica da Esfiha',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlGbthsL4Lbh-t-hBXKGK6l5WvM4TXVYIswDYQ5X293bPxhfb',
    },
    {
      id: 1616,
      title: 'Joe Burger',
      logo: 'https://trokz.com/wp-content//uploads/2018/03/logo-2.png',
    },
    {
      id: 1717,
      title: 'The Fifties Moema',
      logo: 'https://www.thefifties.com.br/wp-content/uploads/2018/08/fifties-1.png',
    },
  ],
  restaurantList: [
    {
      id: 1122,
      title: 'Amaros Grill',
      logo: 'http://amarostable.com/wp-content/uploads/2018/04/amaros_logo.png',
      details: {
        rating: '4,8',
        category: 'Brasileira',
        km: '3,9',
        top: true,
      },
      delivery: {
        time: '35-40 min',
        price: 'Grátis',
        byIfood: false,
      },
    },
    {
      id: 2233,
      title: 'TX burger',
      logo: 'https://s3-sa-east-1.amazonaws.com/delivery-direto/img/stores/5b4cb8ebf0e91.png',
      details: {
        rating: '4,9',
        category: 'Lanches',
        km: '7,9',
        top: true,
      },
      delivery: {
        time: '50-60 min',
        price: 'Grátis',
        byIfood: true,
      },
    },
    {
      id: 3344,
      title: 'Asia Express',
      logo: 'https://s3-sa-east-1.amazonaws.com/delivery-direto/img/stores/59a6d111e88bf.png',
      details: {
        rating: '4,5',
        category: 'Chinesa',
        km: '3,9',
        top: true,
      },
      delivery: {
        time: '20-40 min',
        price: 'Grátis',
        byIfood: false,
      },
    },
    {
      id: 4455,
      title: 'Fábrica da Esfiha',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlGbthsL4Lbh-t-hBXKGK6l5WvM4TXVYIswDYQ5X293bPxhfb',
      details: {
        rating: '4,6',
        category: 'Árabe',
        km: '5,9',
        top: false,
      },
      delivery: {
        time: '45-60 min',
        price: 'R$ 10,00',
        byIfood: false,
      },
    },
    {
      id: 6677,
      title: 'Joe Burger',
      logo: 'https://trokz.com/wp-content//uploads/2018/03/logo-2.png',
      details: {
        rating: '4,3',
        category: 'Lanche',
        km: '6,5',
        top: false,
      },
      delivery: {
        time: '35-50 min',
        price: 'R$ 5,00',
        byIfood: true,
      },
    },
  ],
};

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
          {/* <AddressOptions>
          <Typography size="18" bold>Agora</Typography>
          <Typography size="16" color="#999"> em </Typography>
        </AddressOptions> */}
          <QRCodeButton>
            <QRCodeIcon source={QRCodeImage} />
          </QRCodeButton>
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
