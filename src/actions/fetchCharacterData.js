function setCharacterData(payload) {
  return {
    type: 'SET_CHARACTER_DATA',
    payload
  };
}

function characterFetchingError() {
  return {
    type: 'SET_CHARACTER_ERROR'
  };
}

// Thunk action that can dispatch actions for specific behaviour
// ie when promise is resolved (fetch is successful) dispatch setCharacterData Action
export function fetchCharacterData(currentPage) {
  return function(dispatch) {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(responseAsJson => {
        // unpack the promise and dispatch a thunk
        dispatch(setCharacterData(responseAsJson));
      })
      .catch(() => {
        dispatch(characterFetchingError());
      });
  };
}
