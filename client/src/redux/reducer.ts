import {iMovie} from '@/common/type'
import { Reducer } from 'react'
import {condition} from '@/common/type'
import { AddAction, DeleteAction, EditAction, LoadAction, ConditionAction} from './action'

export interface IMovieState {
    /**
     * 电影数组
     */
    data: iMovie[]
    /**
     * 查询条件
     */
    condition: Required<condition>
    /**
     * 总记录数
     */
    total: number
    /**
     * 是否正在加载数据
     */
    isLoading: boolean
    /**
     * 总页
     */
    totalPage: number
}

const defauleState = {
    data: [],
    isLoading: false,
    condition: {
        page: 1,
        name: '',
        limit: 10
    },
    total: 0,
    totalPage: 0
}

type MovieReducer<A> = Reducer<IMovieState, A>

const saveMovie: MovieReducer<AddAction> = (state, action) => {
    return {
        ...state,
        data: action.payload.movies,
        total: action.payload.total,
        totalPage: Math.ceil(action.payload.total / state.condition.limit)
    };
}

const setCondition: MovieReducer<ConditionAction> = function (state, action) {
    const newState = {
        ...state,
        condition: {
            ...state.condition,
            ...action.payload
        }
    };
    newState.totalPage = Math.ceil(newState.total / newState.condition.limit);
    return newState;
}

const setLoading: MovieReducer<LoadAction> = function (state, action) {
    return {
        ...state,
        isLoading: action.payload
    };
}

const deleteMovie: MovieReducer<DeleteAction> = function (state, action) {
    return {
        ...state,
        data: state.data.filter(m => m._id !== action.payload),
        total: state.total - 1,
        totalPage: Math.ceil((state.total - 1) / state.condition.limit)
    }
}

export const reducer = (state = defauleState, Action: any) => {
    switch (Action.type) {
        case 'addMovie':
            return saveMovie(state, Action)
        case 'deleteMovie':
            return deleteMovie(state, Action)
        case 'editMovie':
            return
        case 'setLoading':
            return setLoading(state, Action)
        case 'conditionMovie':
            return setCondition(state, Action)
        default:
            return state;
    }
}