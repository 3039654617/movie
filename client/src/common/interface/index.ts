export interface iAction<P extends string, T> {
    type: P,
    payload: T
}