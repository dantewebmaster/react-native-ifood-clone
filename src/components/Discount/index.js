import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, CouponImage, Infos, More,
} from './styles';
import Typography from '~/components/Common/Typography';

import Coupon from '~/assets/discount.png';
import RightChevron from '~/assets/right-chevron.png';

export default function Discount({
  title,
  desc,
}) {
  return (
    <Container>
      <CouponImage source={Coupon} />
      <Infos>
        <Typography size="18" color="#333" bold>{title}</Typography>
        <Typography size="18" color="#999">{desc}</Typography>
      </Infos>
      <More source={RightChevron} />
    </Container>
  );
}

Discount.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
