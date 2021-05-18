import produce from 'immer'
import { actionTypes } from '_actions/AccountActions'
const initialState = {
    credential: {
        isAuthenticated: null,
    },
}

const AccountReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case actionTypes.LOGIN_SUCCESS: {
                // draft.user = action.payload
                break
            }
            default:
                return state
        }
    })

export default AccountReducer
