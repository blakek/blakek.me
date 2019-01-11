import React from 'react';

import { Document, Section, Title } from '../components';

const NotFoundPage = () => (
  <Document title="404: Not found">
    <Section style={{ minHeight: '100vh' }} withColor>
      <Title>404 - Not Found</Title>
      <p>You just found a page that doesn&#39;t exist.</p>
    </Section>
  </Document>
);

export default NotFoundPage;
