import { combineReducers } from 'redux'
import AccountReducer from './AccountReducer'
import AppReducer from './AppReducer'

const rootReducer = combineReducers({
    AccountReducer,
    AppReducer,
})

export default rootReducer
