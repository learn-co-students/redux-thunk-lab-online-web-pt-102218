export function fetchCats() {
  return function(dispatch) {
    dispatch(loadingCats())
    return fetch('http://localhost:4000/db').then(response => {
      return response.json()
    }).then(responseJSON => {
      return dispatch({ type: 'FETCH_CATS', payload: responseJSON.images })
    })
  }
}

export function loadingCats() {
  return { type: 'LOADING_CATS' }
}
