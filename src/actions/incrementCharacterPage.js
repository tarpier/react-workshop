import { fetchCharacterData } from './fetchCharacterData';

const incPage = payload => {
  return { type: 'INCREMENT_CHARACTER_PAGE', payload };
};

export const incrementCharacterPage = payload => {
  return function(dispatch) {
    dispatch(fetchCharacterData(payload + 1));
    dispatch(incPage(payload + 1));
  };
};
