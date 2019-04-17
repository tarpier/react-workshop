const initalState = {
  data: null,
  loading: true,
  error: null,
  currentPage: 1,
  allPages: null
};

export default (state = initalState, action) => {
  switch (action.type) {
    case 'SET_CHARACTER_DATA':
      return {
        ...state,
        data: action.payload.results,
        allPages: action.payload.info.pages,
        loading: false,
        error: false
      };
    case 'INCREMENT_CHARACTER_PAGE':
    case 'DECREMENT_CHARACTER_PAGE':
      return {
        ...state,
        currentPage: action.payload
      };
    case 'SET_CHARACTER_ERROR':
      return {
        ...state,
        error: true,
        loading: false,
        data: []
      };

    default:
      return state;
  }
};
