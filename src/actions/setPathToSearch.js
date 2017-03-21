/**
 * Created by eugene on 21.03.17.
 */
export function setPathToSearch(searchCoords) {
    return {
        type: 'USER_SET_PATH_TO_SEARCH', searchCoords: searchCoords
    }
}