export default (state = {cats : []}, action) => {
    switch(action.type) {
        case "LOADING_CATS":
            return {}
        case "FETCHING_CATS":
            debugger
            return {cats: action.payload}

        default:
            return state
    }
}