/**
 * Created by eugene on 07.03.17.
 */
export function login(isUserLogged) {
    return {
        type: 'USER_LOGGED_IN', isLogged: isUserLogged
    }
}