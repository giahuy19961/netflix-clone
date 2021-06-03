import {combineReducers} from 'redux'
import myListReducer from './myList'

const rootReducer = combineReducers({
    myListReducer,
})

export default rootReducer