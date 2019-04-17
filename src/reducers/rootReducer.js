import { combineReducers } from 'redux';
import ui from './uiReducer';
import character from './characterReducer';

export default combineReducers({
  ui,
  character
});
