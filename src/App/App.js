import React, { Component } from 'react';
import { Text, Flex } from 'rebass';
import styled from 'styled-components';
import CharacterList from '../CharacterList';
import Pagination from '../Pagination';

const PageWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: false,
      entries: {},
      currentPage: 1
    };
  }

  // ******
  // Fetch data from api
  // ******
  fetchData(currentPage) {
    this.setState({ currentPage: currentPage >= 1 ? currentPage : 1 });
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json(); // format response to json
      })
      .then(responseAsJson => {
        // unpack the promise and save to state
        this.setState({
          loading: false,
          error: false,
          entries: responseAsJson.results
        });
      })
      .catch(error => {
        this.setState({ loading: false, error: true });
        console.log('Looks like there was a problem: \n', error);
      });
  }

  componentDidMount() {
    this.fetchData(this.state.currentPage);
  }

  render() {
    const { loading, entries, currentPage, error } = this.state;

    if (error) {
      return <Text>ERROR</Text>;
    }

    return (
      <PageWrapper>
        <CharacterList loading={loading} entries={entries} />
        <Pagination
          currentPage={currentPage}
          onNextPageClick={() => this.fetchData(this.state.currentPage + 1)}
          onPrevPageClick={() => this.fetchData(this.state.currentPage - 1)}
        />
      </PageWrapper>
    );
  }
}

export default App;
