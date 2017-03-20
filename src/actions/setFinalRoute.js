/**
 * Created by eugene on 20.03.17.
 */
export function setFinalRoute(finalRoute) {
    return {
        type: 'DRIVER_SELECTED_SINGLE_ROUTE', finalRoute: finalRoute
    }
}