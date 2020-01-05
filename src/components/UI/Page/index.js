import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { If, Then, Else } from 'react-if';
import { Container } from './styles';
import Loading from '../Loading';

const Page = ({ loading, children, delay }) => {
  const [waitDelay, setDelay] = useState(!!Number(delay));
  if (Number(delay)) {
    const intv = setInterval(() => {
      setDelay(false);
      clearInterval(intv);
    }, delay);
  }

  return (
    <If condition={loading || waitDelay}>
      <Then>
        <Container>
          <Loading />
        </Container>
      </Then>
      <Else>
        {children}
      </Else>
    </If>
  );
};

Page.propTypes = {
  loading: PropTypes.bool,
  delay: PropTypes.number,
  children: PropTypes.element.isRequired,
};

Page.defaultProps = {
  loading: false,
  delay: 0,
};

export default Page;
