export const loading = payload => ({
    type: actionTypes.LOADING,
    payload,
})

export const showLoading = () => ({
    type: actionTypes.LOADING,
    payload: true,
})

export const hideLoading = () => ({
    type: actionTypes.LOADING,
    payload: false,
})

export const actionTypes = {
    LOADING: 'LOADING',
}
