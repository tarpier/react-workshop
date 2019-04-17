import { fetchCharacterData } from './fetchCharacterData';

const decPage = payload => {
  return { type: 'DECREMENT_CHARACTER_PAGE', payload };
};

export const decrementCharacterPage = payload => {
  return dispatch => {
    dispatch(fetchCharacterData(payload - 1));
    dispatch(decPage(payload - 1));
  };
};
