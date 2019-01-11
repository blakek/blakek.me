import React from 'react';
import styled from 'styled-components';

import Content from '../Content';
import Section from '../Section';

const ContentWrapper = styled(Content)`
  color: #fff;
  display: flex;
  flex-direction: row;
  font-size: 0.6rem;
  justify-content: space-between;
`;

const Footer = () => (
  <Section as="footer" withColor>
    <ContentWrapper>
      <div>
        <a href="https://blakek.me/">
          Made with{' '}
          <span aria-label="love" style={{ color: '#ff4271' }}>
            ♥
          </span>{' '}
          from Nashville
        </a>
      </div>

      <div>
        <a href="https://github.com/blakek/blakek.me">View source</a>
      </div>
    </ContentWrapper>
  </Section>
);

export default Footer;
