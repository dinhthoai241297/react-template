import { createSelector } from 'reselect'

export const getLoading = createSelector(
    [state => state.AppReducer],
    app => app.loading
)
