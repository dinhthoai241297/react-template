import { takeLatest, put } from 'redux-saga/effects'
import { login, getProfile } from '_actions/account'
import { setProfile } from '_reducers/account'

import {
    hideFullScreenLoading,
    showFullScreenLoading,
} from '_reducers/appCommon'

function* _login({ payload: { params, onCompleted, onError } }) {}

function* _getProfile({ payload: { params, onCompleted, onError } }) {
    yield put(showFullScreenLoading())
    try {
        yield new Promise(resolve => {
            setTimeout(() => {
                resolve(true)
            }, 2000)
        })

        yield put(
            setProfile({
                username: 'admin',
                kind: 1,
                email: 'admin@gmail.com',
            })
        )
        onCompleted && onCompleted(true)
    } catch (error) {
        onError && onError(error)
    } finally {
        yield put(hideFullScreenLoading())
    }
}

const sagas = [
    takeLatest(login.type, _login),
    takeLatest(getProfile.type, _getProfile),
]

export default sagas
