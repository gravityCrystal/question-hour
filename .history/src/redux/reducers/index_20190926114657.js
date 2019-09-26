import {
    APP_LOAD
} from '../constants/actionTypes';


export default (state, action) => {
    switch (action.type) {
        case APP_LOAD:
            return {
                ...state,
                token: action.token || null,
                appLoaded: true,
                currentUser: action.payload ? action.payload.user : null
            };
        default:
            return state;
    }
};
