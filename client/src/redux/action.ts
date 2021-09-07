import { iMovie } from "@/common/type";

export const addAction = (type: string, payload: iMovie[]) => {
    return {
        type,
        payload
    }
}

export const decreaseAction = (type: string, payload: string) => {
    return {
        type,
        payload
    }
}

type editPayload = {
    id: string,
    movie: Partial<iMovie>
}
export const editAction = (type: string, payload: editPayload) => {
    return {
        type,
        payload
    }
}

export const loadAction = (type: string, payload: boolean) => {
    return {
        type,
        payload
    }
}

type condition = {
    name?: string,
    page?: number,
    limit?: number
}

export const conditionAction = (type: string, payload: condition) => {
    return {
        type,
        payload
    }
}

// export const allAction: addAction | decreaseAction