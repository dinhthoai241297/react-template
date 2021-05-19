import { actionTypes } from '../actions/AccountActions'
import { sendRequest } from '../services/apiService'
import { takeLatest, call } from 'redux-saga/effects'
import apiConfig from '../constants/apiConfig'
// import { setObjectData } from '_utils/localStorageHelper'
// import { USER_JWT } from '_constants/storageKeys'

import { sendSocketRequest } from '../services/socketService'

function* _login({ payload: { params, onDone } }) {
    // yield put(setLoading(true))
    const response = yield call(sendRequest, apiConfig.account.login, params)
    const { responseData, success } = response

    if (success && responseData?.result) {
        // yield put(loginSuccess())
        // save storage
        // setObjectData(USER_JWT, responseData)
    }

    onDone && onDone(response)
    // yield put(setLoading(false))
}

// test socket
function* _loginSocket({}) {
    const res = yield call(sendSocketRequest, apiConfig.socketTest.login, {
        username: 'admin',
        password: '113',
    })

    console.log({ res })
}

const sagas = [
    takeLatest(actionTypes.LOGIN, _login),
    takeLatest('LOGIN_SOCKET', _loginSocket),
]

export default sagas
