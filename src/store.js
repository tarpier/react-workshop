// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/rootReducer';
// export default function configureStore(initialState = {}) {
//   return createStore(rootReducer, initialState, applyMiddleware(thunk));
// }

// SETUP WITH REDUX-DEV-TOOLS-EXTENSION

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middleWare = [thunk];

export default function configureStore() {
//initialState = { ui: { darkmode: false } }
  return createStore(
    rootReducer,
    //initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
  );
}
