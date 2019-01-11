import React from 'react';
import styled from 'styled-components';

import { Content, Document, Section, Title } from '../components';

const Button = styled.a`
  background-color: #fff;
  border-radius: 3px;
  color: #7142ff;
  display: inline-block;
  padding: 0.8em 1.6em;
  text-decoration: none;
`;

const Intro = styled(Section).attrs({ withColor: true })`
  min-height: 70vmin;
  text-align: center;
`;

const LinkArea = styled(Content)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const IndexPage = () => (
  <Document
    title="Home"
    keywords={['Charles', 'Blake', 'Knight', 'blakek', '@blakek']}
  >
    <Intro>
      <Title>Blake Knight</Title>

      <LinkArea>
        <Button href="https://github.com/blakek">GitHub</Button>
        <Button href="https://www.linkedin.com/in/cbknight">LinkedIn</Button>
      </LinkArea>
    </Intro>

    <Section>
      <Content style={{ fontSize: '1.4em' }}>
        Hi, I’m Blake!{' '}
        <span aria-label="wave" role="img">
          👋
        </span>
      </Content>
      <Content>
        I’m a web engineer from Nashville. I’m currently really enjoying Node.js
        and GraphQL for servers and React/React Native for clients. I spend time
        with several aspects of web engineering including managing Linux
        servers, designing databases, creating back-end systems, and showing
        neat stuff on people’s screens.
      </Content>
      <Content>
        I have lots of other hobbies. My latest hobby is building and flying FPV
        quadcopters. I started learning Mandarin a few months ago. I also really
        enjoy traveling and learning how other people think.
      </Content>
    </Section>
  </Document>
);

export default IndexPage;
