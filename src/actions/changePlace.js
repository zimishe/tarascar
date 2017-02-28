/**
 * Created by eugene on 27.02.17.
 */
export function changePlace(markersToSet) {
    return {
        type: 'PLACE_CHANGED', markers : markersToSet
    }
}