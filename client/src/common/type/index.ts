
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