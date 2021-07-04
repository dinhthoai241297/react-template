import { combineReducers } from 'redux'
import appCommon from './appCommon'
import account from './account'

const rootReducer = combineReducers({
    appCommon,
    account,
})

export default rootReducer
