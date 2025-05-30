import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './redux/slice/counterSlice';
// import authReducer from './redux/slice/authentication';


export const store = configureStore(
{reducer:{
counter: counterReducer
// authentication: authReducer
}}
);
