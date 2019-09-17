
import {
  LOADING_CATS,
  FETCH_CATS

} from '../actions/types';

const initialState = {
  pictures: [],
  loading: false
}

export default(state = initialState, action) => {
  switch(action.type) {
    case LOADING_CATS:
      return {
        ...state,
        loading: true
      }

    case FETCH_CATS:
      return {
        ...state,
        pictures: action.payload,
        loading: false
      }
    default:
      return state;
  }
}