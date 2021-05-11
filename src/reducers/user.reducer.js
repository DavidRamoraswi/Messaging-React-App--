import { userConstants } from "../actions/constants"

const intiState = {
    users: [],
    conversations: []
}

// eslint-disable-next-line 
export default (state = intiState, action) => {
// eslint-disable-next-line 
    switch(action.type){
        // eslint-disable-next-line 
        case `${userConstants.GET_REALTIME_USERS}_REQUEST`:
            break;
        case `${userConstants.GET_REALTIME_USERS}_SUCCESS`:
            // eslint-disable-next-line 
            state = {
                ...state,
                users: action.payload.users
            }
            break;
        case userConstants.GET_REALTIME_MESSAGES:
            state = {
                ...state,
                conversations: action.payload.conversations
            }
            break;
        case `${userConstants.GET_REALTIME_MESSAGES}_FAILURE`:
            state = {
                ...state,
                conversations: []
            }
            break;
        
    }


    return state;

}