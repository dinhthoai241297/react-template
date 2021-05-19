export const loading = payload => ({
    type: actionTypes.LOADING,
    payload,
})

export const showLoading = () => loading(true)

export const hideLoading = () => loading(false)

export const setLanguage = payload => ({
    type: actionTypes.SET_LANGUAGE,
    payload,
})

export const actionTypes = {
    LOADING: 'LOADING',
    SET_LANGUAGE: 'SET_LANGUAGE',
}
