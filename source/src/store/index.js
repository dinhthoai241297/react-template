import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '_reducers'
import rootSaga from '_sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        process.env.NODE_ENV === 'development'
            ? composeEnhancers(applyMiddleware(sagaMiddleware))
            : applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga)
    return store
}

export default configureStore
