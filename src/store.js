import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './components/UserSlice';

const rootReducer = {
    Users: UserReducer,
}


const store = configureStore({
  reducer: rootReducer,
});

export default store;
