import { updateView } from './ActionTypes'

export function changeView(view) {
    return async (dispatch) => {
        dispatch(updateView(view))
    }
}