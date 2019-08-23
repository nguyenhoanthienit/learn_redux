import { UPDATE_USERS } from '../actions/users-action';

export default function usersReducer(state = '', {type, payload}){
    switch (type) {
        case UPDATE_USERS:
            return payload.users;
        default:
            return state;
    }
}