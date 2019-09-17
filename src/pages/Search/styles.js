import styled from 'styled-components/native';

export const ScrollableContainer = styled.ScrollView`
  padding: 0;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  padding: 16px 16px 32px;
`;

export const RecentSearches = styled.FlatList.attrs({
  bounces: false,
})`
  padding: 0 16px 24px;
`;

export const ListItem = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #d9d9d9;
  padding: 16px 0;
`;

export const CategoriesList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 16px 100px;
`;

export const CategoryItem = styled.ImageBackground`
  width: 47.55%;
  height: 90px;
  background-color: #000;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;
`;

export const ImageOverlay = styled.View`
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  padding: 16px;
`;
