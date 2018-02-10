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
        default:
            return state
    }
}