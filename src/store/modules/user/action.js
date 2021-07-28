import { ADD_COMMENT } from './actionType';

export const addComment = (updateUser) => ({
    type: ADD_COMMENT,
    updateUser,
})