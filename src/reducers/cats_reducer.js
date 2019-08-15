

export default function catReducer(state = { loading: false, pictures: []
}, action) {
  switch(action.type) {
    case 'LOADING_CATS': 
      return Object.assign({}, state, {loading: true} )
    case 'FETCH_CATS': 
    console.log("cat reducer!", action.payload)
    console.log("cat reducer!", state)
      return {loading: false, pictures: action.payload}
    default: 
      return state 
  }
}
