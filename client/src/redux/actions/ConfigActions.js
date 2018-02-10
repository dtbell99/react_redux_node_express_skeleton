import { updateView, updateLoader, serverConfigUpdate } from './ActionTypes'

export function changeView(view) {
    return async (dispatch) => {
        dispatch(updateView(view))
    }
}

export function updateServerConfig() {
    return async (dispatch) => {
        dispatch(updateLoader(true))
        var request = new Request("/api/serverconfig", {
            method: 'GET',
            headers: {
                "content-type": "application/json"
            }
        })
        try {
            const payload = await fetch(request)
            const json = await (payload.json())
            if (json) {
                dispatch(serverConfigUpdate(json))
            }
            dispatch(updateLoader(false))
        } catch (err) {
            console.log(err)
            dispatch(updateLoader(false))
        }
    }
}