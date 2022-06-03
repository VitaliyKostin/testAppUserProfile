import { combineReducers } from "redux";
import editProfileReducer from './editProfileReducer';

export default combineReducers({
  userData: editProfileReducer
})