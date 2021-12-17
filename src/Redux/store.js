import { createStore, applyMiddleware, combineReducers } from 'redux'
import authReducer from './Reducers/authReducer';
import errorReducer from './Reducers/errorReducer';
import dataReducer from './Reducers/dataReducer';
import thunk from 'redux-thunk';

const combinedReducer = combineReducers({
    authReducer,
    errorReducer,
    dataReducer
})

const store = createStore(combinedReducer,applyMiddleware(thunk));
export default store;