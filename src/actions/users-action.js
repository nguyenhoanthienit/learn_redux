export const UPDATE_USERS = 'users : updateUsers';
export function updateUsers(newUser) {
    return {
        type : UPDATE_USERS,
        payload : {
            users : newUser
        }
    }
}