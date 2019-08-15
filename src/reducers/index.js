import { combineReducers } from "redux";
import catReducer  from './cats_reducer'

const rootReducer = combineReducers({
  cats: catReducer
})

export default rootReducer; 