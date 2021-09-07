import { createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer} from './reducer'
import thunk from 'redux-thunk'


const iReducer = combineReducers({reducer})

const store = createStore(iReducer, applyMiddleware(thunk))

export default store;
