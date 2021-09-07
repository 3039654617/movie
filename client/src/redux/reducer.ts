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
    total: 0
}
type MovieReducer<A> = Reducer<IMovieState, A>

const saveMovie: MovieReducer<AddAction> = function (state, action) {
    return {
        ...state,
        data: action.payload.movies,
        total: action.payload.total,
        totalPage: Math.ceil(action.payload.total / state.condition.limit)
    };
}

const reducer = (state = defauleState, Action: any) => {
    switch (Action.type) {
        case 'addMovie':
            return
        case 'deleteMovie':
            return
        case 'editMovie':
            return
        case 'setLoading':
            return
        case 'conditionMovie':
            return
    }
}