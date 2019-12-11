import React from 'react';
import PropTypes from 'prop-types';
import { If, Then, Else } from 'react-if';
import {
  Container, Text, ImageView, Image,
} from './styles';
import Loading from '../../../assets/images/2263.gif';

const Page = ({ loading, children }) => (
  <If condition={loading}>
    <Then>
      <Container>
        <Text>Fetching Data</Text>
        <ImageView>
          <Image source={Loading} />
        </ImageView>
      </Container>
    </Then>
    <Else>
      {children}
    </Else>
  </If>
);

Page.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

Page.defaultProps = {
  loading: false,
};

export default Page;
