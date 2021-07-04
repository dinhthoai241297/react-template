import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: null,
    profile: {},
}

const account = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setProfile(state, action) {
            state.profile = action.payload
            state.isAuthenticated = true
        },
    },
})

export const { setProfile } = account.actions
export default account.reducer
