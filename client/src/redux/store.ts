import { createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer} from './reducer'
import thunk from 'redux-thunk'
import { AddAction, DeleteAction, EditAction, LoadAction, ConditionAction, fetchMovies} from './action'

const iReducer = combineReducers({reducer})

const store = createStore(iReducer, applyMiddleware(thunk))

export default store;
