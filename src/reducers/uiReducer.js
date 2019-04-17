const initalState = { darkmode: false };

export default (state = initalState, action) => {
  switch (action.type) {
    case 'TOGGLE_DARKMODE':
      return {
        darkMode: !state.darkMode
      };
    default:
      return state;
  }
};
