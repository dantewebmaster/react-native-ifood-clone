import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, TabItem, TabIcon,
} from './styles';
import Typography from '../Common/Typography';

export default function CustomFooterTabBar({
  renderIcon,
  getLabelText,
  activeTintColor,
  inactiveTintColor,
  onTabPress,
  onTabLongPress,
  getAccessibilityLabel,
  navigation,
}) {
  const { routes, index: activeRouteIndex } = navigation.state;

  return (
    <Container>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

        return (
          <TabItem
            key={routeIndex}
            onPress={() => {
              onTabPress({ route });
            }}
            onLongPress={() => {
              onTabLongPress({ route });
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}
          >
            <TabIcon source={renderIcon({ route })} />
            <Typography size="14" color={tintColor}>{getLabelText({ route })}</Typography>
          </TabItem>
        );
      })}
    </Container>
  );
}

CustomFooterTabBar.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
