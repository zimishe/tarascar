/**
 * Created by eugene on 09.03.17.
 */

export function logOut(isUserLogged) {
    return {
        type: 'USER_LOGGED_OUT', isLogged: isUserLogged
    }
}
