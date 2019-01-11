import styled from 'styled-components';

const Section = styled.section`
  align-items: center;
  background-color: ${p => (p.withColor ? '#7142ff' : '#fff')};
  color: ${p => (p.withColor ? '#fff' : '#333')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.0875rem 1.45rem;
`;

export default Section;
