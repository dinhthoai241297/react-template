import { all } from 'redux-saga/effects'
import account from './account'
import appCommon from './appCommon'

const sagas = [...account, ...appCommon]

function* rootSaga() {
    yield all(sagas)
}

export default rootSaga
