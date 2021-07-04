import { createSlice } from '@reduxjs/toolkit'

import { LANGUAGE } from '_constants/storageKeys'
import { DEFAULT_LANGUAGE } from '_locales/languages'
import { getStringData, setStringData } from '_utils/localStorageHelper'

const initialState = {
    loading: 0,
    language: getStringData(LANGUAGE) || DEFAULT_LANGUAGE,
}

const appCommon = createSlice({
    name: 'appCommon',
    initialState,
    reducers: {
        showFullScreenLoading(state) {
            state.loading++
        },
        hideFullScreenLoading(state) {
            state.loading = Math.max(state.loading - 1, 0)
        },
        setLanguage(state, action) {
            state.language = action.payload
        },
    },
})

export const { showFullScreenLoading, hideFullScreenLoading } =
    appCommon.actions
export default appCommon.reducer
