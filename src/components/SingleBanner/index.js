import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, BannerImage,
} from './styles';

export default function SingleBanner({
  bannerUrl,
}) {
  return (
    <Container>
      <BannerImage source={{ uri: bannerUrl }} />
    </Container>
  );
}

SingleBanner.propTypes = {
  bannerUrl: PropTypes.string.isRequired,
};
