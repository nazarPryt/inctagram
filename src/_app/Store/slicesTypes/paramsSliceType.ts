export type AllPostsParamsType = {
    endCursorPostId?: null | number
    pageSize?: number
    sortBy?: string
    sortDirection?: 'asc' | 'desc'
}
export type GetUserPostsParamsType = {endCursorPostId: null | number; userId: null | number}
