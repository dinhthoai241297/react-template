import produce from 'immer'
import { actionTypes } from '_actions/AppActions'
const initialState = {
    loading: 0,
}

const AppReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case actionTypes.LOADING: {
                draft.loading = Math.max(0, action.payload)
                break
            }
            default:
                return state
        }
    })

export default AppReducer
