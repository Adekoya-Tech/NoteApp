import { USER_TYPES } from "../types";

const initialState = {
    users: []
}

export const users = (state = initialState, action) => {
    switch(action.type){
        case USER_TYPES.USERS_SIGNIN:
        case USER_TYPES.USERS_SIGNUP:
            return{
                ...state,
                users:[action.payload, ...state.users]
            };
            default:
                return state;
    }
}