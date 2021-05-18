import { all } from 'redux-saga/effects';
import account from './account'

const sagas = [
    ...account
];

function* rootSaga() {
    yield all(sagas);
}

export default rootSaga;