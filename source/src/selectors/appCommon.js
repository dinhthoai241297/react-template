import { createSelector } from 'reselect'

export const getLoading = createSelector(
    [state => state.appCommon],
    app => app.loading
)
