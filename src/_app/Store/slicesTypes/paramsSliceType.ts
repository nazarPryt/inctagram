export type AllPostsParamsType = {
    endCursorPostId?: null | number
    pageSize?: number
    sortBy?: string
    sortDirection?: 'asc' | 'desc'
}
export type UserPostParamsType = {endCursorPostId: null | number; userId: null | number}
