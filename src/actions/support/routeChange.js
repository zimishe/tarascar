/**
 * Created by eugene on 21.03.17.
 */

export function updateRoute(finalRoute) {
    return {
        type: 'SINGLE_ROUTE_UPDATED', finalRoute: finalRoute
    }
}