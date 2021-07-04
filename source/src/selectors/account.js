import { createSelector } from 'reselect'

export const isAuthenticated = createSelector(
    [state => state.account],
    acc => acc.isAuthenticated
)

export const profile = createSelector(
    [state => state.account],
    acc => acc.profile
)

const accountSelectors = {
    isAuthenticated,
    profile,
}

export default accountSelectors
