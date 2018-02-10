export const configReducer = (state = {}, action) => {

    switch (action.type) {
        case "UPDATE_VIEW":
            state = {
                ...state,
                loadedView: action.view
            }
            return state
        case "UPDATE_LOADER":
            state = {
                ...state,
                loading: action.showLoader
            }
            return state
        case "UPDATE_SERVER_CONFIG":
            state = {
                ...state,
                serverConfig: action.config
            }
            console.log("updated:" + JSON.stringify(state))
            return state
        default:
            return state
    }
}