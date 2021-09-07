import { iMovie } from "@/common/type";

export const addAction = (movies: iMovie[], total: number) => {
    return {
        type: 'addMovie',
        payload: {
            movies,
            total
        }
    }
}

export const deleteAction = ( id: string) => {
    return {
        type: 'deleteMovie',
        payload: id
    }
}

export const editAction = ( id: string, editMovie: Partial<iMovie>) => {
    return {
        type: 'editMovie',
        payload: {
            id,
            editMovie
        }
    }
}

export const loadAction = ( value: boolean) => {
    return {
        type: 'setLoading',
        payload: value
    }
}

type condition = {
    name?: string,
    page?: number,
    limit?: number
}

export const conditionAction = (condition: condition) => {
    return {
        type: 'conditionMovie',
        payload: {
            name: condition.name,
            page: condition.page,
            limit: condition.limit
        }
    }
}

// export type allAction = addAction | deleteAction | editAction | loadAction | conditionAction;