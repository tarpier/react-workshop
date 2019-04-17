import React from 'react';
import styled from 'styled-components';
import { Box, Heading } from 'rebass';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import { toggleDarkMode } from '../../actions/toggleDarkMode';

const PageWrapper = styled.div`
  background-color: ${props => (props.darkMode ? 'black' : 'white')};
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

const Home = props => {
  return (
    <PageWrapper darkMode={props.isDarkMode}>
      <Navigation>
        <Heading>HOME</Heading>
        <Link to={'/characters'}>Go to Character Overview</Link>
        <button onClick={() => props.toggleDarkMode()}>
          {props.isDarkMode ? 'Lightmode' : 'Darkmode'}
        </button>
      </Navigation>
    </PageWrapper>
  );
};

const mapStateToProps = state => ({
  isDarkMode: state.ui.darkMode
});

const mapDispatchToProps = dispatch => ({
  toggleDarkMode: () => dispatch(toggleDarkMode())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
