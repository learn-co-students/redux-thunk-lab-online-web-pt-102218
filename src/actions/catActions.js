
export const fetchCats = () => {
  console.log("inside catActions!")

  return (dispatch) => {
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://localhost:4000/db')
    .then(response => response.json())
    .then(cats => dispatch({type: 'FETCH_CATS', payload: cats.images })) 
  }
}
  


  