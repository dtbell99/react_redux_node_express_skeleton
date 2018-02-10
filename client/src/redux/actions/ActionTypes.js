export function updateLoader(showLoader) {
    return { type: "UPDATE_LOADER", showLoader }
}

export function updateView(view) {
    return { type: "UPDATE_VIEW", view }
}