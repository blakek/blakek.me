import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Footer from './Footer';
import GlobalStyles from './GlobalStyles';
import SEO from './SEO';

const Wrapper = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  overflow: auto;
  width: 100vw;
`;

const Layout = ({ children, ...seoProps }) => (
  <Fragment>
    <SEO {...seoProps} />
    <GlobalStyles />

    <Wrapper>
      {children}
      <Footer />
    </Wrapper>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
