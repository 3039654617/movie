
export type iMovie = {
    _id?: string,
    name: string,
    isComing: boolean,
    poster: string | number,
    description: string,
    types: string[],
    areas: string[],
    time: number
}

export type condition = {
    name?: string,
    page?: number,
    limit?: number
}