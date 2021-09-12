import { iMovie, condition } from "@/common/type";
import { iAction } from "@/common/interface";
import { ThunkAction } from "redux-thunk";
import { IMovieState } from "./reducer";
import { add, conditionMovie, del, edit } from "@/api/movie";


//仓库添加分页数据
export type AddAction = iAction<'addMovie', {movies: iMovie[], total:number}>

export const addAction = (movies: iMovie[], total: number):AddAction => {
    return {
        type: 'addMovie',
        payload: {
            movies,
            total
        }
    }
}

//删除仓库数据
export type DeleteAction = iAction<'deleteMovie', string>

export const deleteAction = ( id: string):DeleteAction => {
    return {
        type: 'deleteMovie',
        payload: id
    }
}

//编辑仓库数据
export type EditAction = iAction<'editMovie', {
    id: string,
    editMovie: Partial<iMovie>
}>

export const editAction = ( id: string, editMovie: Partial<iMovie>): EditAction => {
    return {
        type: 'editMovie',
        payload: {
            id,
            editMovie
        }
    }
}

//设置loading状态
export type LoadAction = iAction<'setLoading', boolean>

export const loadAction = ( value: boolean): LoadAction => {
    return {
        type: 'setLoading',
        payload: value
    }
}

//设置loading状态
export type ConditionAction = iAction<'conditionMovie', condition>

export const conditionAction = (condition: condition): ConditionAction => {
    return {
        type: 'conditionMovie',
        payload: {
            name: condition.name,
            page: condition.page,
            limit: condition.limit
        }
    }
}

export type allAction = AddAction | DeleteAction | EditAction | LoadAction | ConditionAction;

export const fetchMovies = (cond: condition): ThunkAction<Promise<void>, IMovieState, any, allAction> => {
    return async (dispatch, getState) => {
        dispatch(loadAction(true));
        dispatch(conditionAction(cond));
        const curCondition = getState().reducer.condition;
        const resp = await conditionMovie(curCondition);
        
        dispatch(addAction(resp.data.data.data, resp.data.data.count));
        dispatch(loadAction(false));
    }
}

function deleteMovie(id: string)
    : ThunkAction<Promise<void>, IMovieState, any, allAction> {
    return async dispatch => {
        dispatch(loadAction(true));
        await del(id);
        dispatch(deleteAction(id));//删除本地仓库中的数据
        dispatch(loadAction(false));
    }
}

function editMovie(id: string, updateMovie: Partial<iMovie>) 
    : ThunkAction<Promise<void>, IMovieState, any, allAction> {
    return async dispatch => {
        dispatch(editAction(id, updateMovie))
        await edit(id, updateMovie)
    }
}

// function addMovie(movie: iMovie[], total: number) 
    // : ThunkAction<Promise<void>, IMovieState, any, allAction> {
    // return async dispatch => {
        // dispatch(addAction(movie, total))
        // await edit(id, updateMovie)
    // }
// }

export default {
    addAction,
    deleteAction,
    editAction,
    loadAction,
    conditionAction,
    fetchMovies,
    editMovie,
    deleteMovie
}