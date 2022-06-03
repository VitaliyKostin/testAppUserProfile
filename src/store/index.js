import { configureStore } from '@reduxjs/toolkit';
import editProfileReducer from '../reducers/editProfileReducer';

export default configureStore({
  reducer: {
    editProfile: editProfileReducer
  },
})