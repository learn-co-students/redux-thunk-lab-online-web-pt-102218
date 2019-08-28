export default (state = {loading: false, pictures: []}, action) => {
    switch(action.type) {
        case "LOADING_CATS":
          return {loading: false, pictures: []}
        case "FETCH_CATS":
          return {loading: false, pictures: action.payload}

        default:
          return state
    }
}
