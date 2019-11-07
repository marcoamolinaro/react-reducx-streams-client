import { combineReducers } from 'redux';
import { reducer as formRecucer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer,
    form: formRecucer,
    streams: streamReducer
});