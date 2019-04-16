import React from 'react';
import styled from 'styled-components';
import { Box, Heading } from 'rebass';
import { Link } from '@reach/router';

const PageWrapper = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navigation = styled(Box)`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 23em;
  width: 23em;
  border: 2px solid darkgray;
  border-radius: 2em;
`;

const Home = () => {
  return (
    <PageWrapper>
      <Navigation>
        <Heading>HOME</Heading>
        <Link to={'/characters'}>Go to Character Overview</Link>
      </Navigation>
    </PageWrapper>
  );
};

export default Home;
