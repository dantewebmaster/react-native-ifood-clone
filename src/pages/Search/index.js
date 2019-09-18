import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// Components
import SearchField from '~/components/SearchField';
import Button from '~/components/Common/Button';
import Section from '~/components/Common/Section';
import Typography from '~/components/Common/Typography';
// Styles
import {
  ScrollableContainer,
  SearchContainer, RecentSearches, ListItem, CategoryItem, ImageOverlay, CategoriesList,
} from './styles';
import { Separator } from '~/components/RestaurantList/styles';
// Data
import { recentSearches, categories } from '../../../data.json';

export default function Search({ navigation }) {
  return (
    <SafeAreaView>
      <SearchContainer>
        <SearchField
          placeholderText="Prato ou restaurante"
          autoFocus
        />
        <Button
          text="Cancelar"
          textColor="#e81010"
          onPressHandler={() => navigation.goBack()}
        />
      </SearchContainer>
      <ScrollableContainer
        showsVerticalScrollIndicator={false}
        bounces={false}
        refreshing={false}
      >
        <Section
          noMargin
          title="Buscas Recentes"
        >
          <RecentSearches
            data={recentSearches}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <ListItem key={item.id}>
                <Icon name="history" size={32} color="#999" />
                <Separator />
                <Typography size="22" color="#999">{item.title}</Typography>
              </ListItem>
            )}
          />
        </Section>
        <Section
          title="Categorias"
        >
          <CategoriesList>
            {categories.map((item) => (
              <CategoryItem key={item.id} source={{ uri: item.imageUrl }}>
                <ImageOverlay>
                  <Typography size="18" color="#fff" bold>{item.title}</Typography>
                </ImageOverlay>
              </CategoryItem>
            ))}
          </CategoriesList>
        </Section>
      </ScrollableContainer>
    </SafeAreaView>
  );
}

Search.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};
