export function updateLoader(isShowing) {
    return {type: "UPDATE_LOADER", running:isShowing}
}