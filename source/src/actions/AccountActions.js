export const login = payload => ({
    type: actionTypes.LOGIN,
    payload,
})

export const actionTypes = {
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
}
