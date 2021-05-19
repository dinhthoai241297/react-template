import produce from 'immer'
import { actionTypes } from '_actions/AppActions'
import { LANGUAGE } from '_constants/storageKeys'
import { DEFAULT_LANGUAGE } from '_locales/languages'
import { getStringData, setStringData } from '_utils/localStorageHelper'

const initialState = {
    loading: 0,
    language: getStringData(LANGUAGE) || DEFAULT_LANGUAGE,
}

const AppReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case actionTypes.LOADING: {
                draft.loading = Math.max(
                    0,
                    draft.loading + (action.payload ? 1 : -1)
                )
                break
            }
            case actionTypes.SET_LANGUAGE: {
                draft.language = action.payload
                setStringData(LANGUAGE, action.payload)
                break
            }
            default:
                return state
        }
    })

export default AppReducer
