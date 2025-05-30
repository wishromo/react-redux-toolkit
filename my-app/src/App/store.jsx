import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../featurs/counter/conterSlice';
 import authReducer from '../featurs/counter/authentication';


export const store = configureStore(
{reducer:{
counter: counterReducer,
 authentication: authReducer
}}
);
