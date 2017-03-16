/**
 * Created by eugene on 16.03.17.
 */
export function setRoutes(routes) {
    return {
        type: 'DRIVER_SELECTED_ROUTES', routes: routes
    }
}