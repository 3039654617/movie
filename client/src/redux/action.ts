import { iMovie, condition } from "@/common/type";
import { iAction } from "@/common/interface";


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

export default {
    addAction,
    deleteAction,
    editAction,
    loadAction,
    conditionAction
}