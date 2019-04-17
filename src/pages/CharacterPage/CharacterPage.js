import React, { Component } from 'react';
import { Text, Flex } from 'rebass';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchCharacterData } from '../../actions/fetchCharacterData';
import { incrementCharacterPage } from '../../actions/incrementCharacterPage';
import { decrementCharacterPage } from '../../actions/decrementCharacterPage';

import CharacterList from '../../components/CharacterList';
import Pagination from '../../components/Pagination';

const PageWrapper = styled(Flex)`
  background-color: ${props => (props.darkMode ? 'black' : 'white')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
`;

class CharacterPage extends Component {
  componentDidMount() {
    this.props.fetchCharacterData(this.props.currentPage);
  }

  nextPage() {
    if (this.props.currentPage < this.props.allPages) {
      this.props.incrementCharacterPage(this.props.currentPage);
    }
  }

  prevPage() {
    if (this.props.currentPage > 1) {
      this.props.decrementCharacterPage(this.props.currentPage);
    }
  }

  render() {
    const { entries, loading, error, currentPage } = this.props;

    if (error) {
      return <Text>ERROR</Text>;
    }

    return (
      <PageWrapper darkMode={this.props.isDarkMode}>
        <CharacterList loading={loading} entries={entries} />
        <Pagination
          currentPage={currentPage}
          onNextPageClick={() => this.nextPage()}
          onPrevPageClick={() => this.prevPage()}
        />
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({
  isDarkMode: state.ui.darkMode,
  entries: state.character.data,
  loading: state.character.loading,
  error: state.character.error,
  currentPage: state.character.currentPage,
  allPages: state.character.allPages
});

const mapDispatchToProps = dispatch => ({
  fetchCharacterData: currentPage => dispatch(fetchCharacterData(currentPage)),
  incrementCharacterPage: currentPage =>
    dispatch(incrementCharacterPage(currentPage)),
  decrementCharacterPage: currentPage =>
    dispatch(decrementCharacterPage(currentPage))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterPage);
