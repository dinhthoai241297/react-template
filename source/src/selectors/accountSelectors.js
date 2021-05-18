import { createSelector } from 'reselect'

export const getCredential = createSelector(
    [state => state.AccountReducer],
    acc => acc.credential
)
