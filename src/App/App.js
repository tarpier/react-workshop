import React, { Component } from 'react';
import CharacterList from '../CharacterList';
import Pagination from '../Pagination';

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

  fetchData(currentPage) {
    this.setState({ currentPage: currentPage >= 1 ? currentPage : 1 });
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(responseAsJson => {
        this.setState({ loading: false, entries: responseAsJson.results });
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
    const { loading, entries, currentPage } = this.state;
    return (
      <div className="App">
        <input type="text" />
        <CharacterList loading={loading} entries={entries} />
        <Pagination
          currentPage={currentPage}
          //allPages={!loading && data.info.pages}
          onNextPageClick={() => this.fetchData(this.state.currentPage + 1)}
          onPrevPageClick={() => this.fetchData(this.state.currentPage - 1)}
        />
      </div>
    );
  }
}

export default App;
